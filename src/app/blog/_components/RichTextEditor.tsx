"use client";

import React, {
	useEffect,
	useRef,
	useImperativeHandle,
	forwardRef,
} from "react";
import { useQuill } from "react-quilljs";
import hljs from "highlight.js";
import "quill/dist/quill.snow.css";

export type RichTextEditorRef = {
	getHTML: () => string;
	setContent: (html: string) => void;
};

type RichTextEditorProps = {
	initialContent?: string;
	placeholder?: string;
	onChange?: (html: string) => void;
	className?: string;
	minHeight?: string;
};


const QUILL_MODULES = {
	toolbar: {
		container: [
		["bold", "italic", "underline", "strike"],
		["blockquote", "code-block"],
		[{ align: [] }],
		[{ list: "ordered" }, { list: "bullet" }],
		[{ indent: "-1" }, { indent: "+1" }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		["link", "image", "video"],
		[{ color: [] }, { background: [] }],
		["clean"],
		],
		handlers: {
			"code-block": function (this: { quill: { format: (name: string, value: string | false) => void } }, value: boolean) {
				this.quill.format("code-block", value ? "javascript" : false);
			},
		},
	},
	syntax: { hljs },
	clipboard: { matchVisual: false },
};

const QUILL_FORMATS = [
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"code-block",
	"code-token",
	"align",
	"list",
	"indent",
	"header",
	"link",
	"image",
	"video",
	"color",
	"background",
];

const TOOL_LABELS: Record<string, string> = {
	"ql-blockquote": "Quote",
	"ql-code-block": "Code block",
	"ql-clean": "Clear formatting",
};

const RichTextEditor = forwardRef<RichTextEditorRef, RichTextEditorProps>(
	(
		{
			initialContent = "",
			placeholder = "Write your content here…",
			onChange,
			className = "",
			minHeight = "280px",
		},
		ref,
	) => {
		const initialSetRef = useRef(false);
		const onChangeRef = useRef(onChange);

		const { quill, quillRef } = useQuill({
			theme: "snow",
			modules: QUILL_MODULES,
			formats: QUILL_FORMATS,
			placeholder,
		});

		useEffect(() => {
			onChangeRef.current = onChange;
		}, [onChange]);

		// Set initial content when quill is ready
		useEffect(() => {
			if (!quill) return;
			if (!initialSetRef.current && (initialContent || initialContent === "")) {
				initialSetRef.current = true;
				quill.clipboard.dangerouslyPasteHTML(initialContent || "<p><br></p>");
			}
		}, [quill, initialContent]);

		// text-change handler for onChange
		useEffect(() => {
			if (!quill) return;
			const toolbar = quill.getModule("toolbar") as {
				container?: HTMLElement;
			};
			Object.entries(TOOL_LABELS).forEach(([className, label]) => {
				const control = toolbar.container?.querySelector(
					`.${className}`,
				) as HTMLElement | null;
				if (control) {
					control.title = label;
					control.setAttribute("aria-label", label);
				}
			});

			const handler = () => {
				const html = quill.root.innerHTML;
				onChangeRef.current?.(html);
			};
			quill.on("text-change", handler);
			return () => {
				quill.off("text-change", handler);
			};
		}, [quill]);

		// Expose getHTML / setContent to parent
		useImperativeHandle(
			ref,
			() => ({
				getHTML: () => {
					if (!quill?.root) return "";
					return quill.root.innerHTML;
				},
				setContent: (html: string) => {
					if (!quill) return;
					quill.clipboard.dangerouslyPasteHTML(html || "<p><br></p>");
				},
			}),
			[quill],
		);

		return (
			<div
				className={`ps-quill overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}
				style={{ minHeight }}
			>
				<div ref={quillRef} style={{ minHeight }} />
				<style jsx global>{`
					.ps-quill .ql-toolbar {
						border: 0 !important;
						border-bottom: 1px solid rgb(226 232 240) !important;
						background: rgb(248 250 252);
					}
					.ps-quill .ql-container {
						border: 0 !important;
						font-family: var(--font-sans);
					}
					.ps-quill .ql-editor {
						min-height: ${minHeight};
						padding: 16px;
						color: rgb(2 4 19);
					}
					.ps-quill .ql-editor pre,
					.ps-quill .ql-editor .ql-code-block-container {
						margin: 16px 0;
						overflow-x: auto;
						border-radius: 8px;
						background: rgb(15 23 42);
						padding: 16px;
						color: rgb(226 232 240);
						font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
						font-size: 13px;
						line-height: 1.7;
						white-space: pre;
					}
					.ps-quill .ql-editor blockquote {
						border-left: 4px solid rgb(33 77 192);
						padding-left: 16px;
						color: rgb(71 85 105);
					}
					.ps-quill .ql-code-block-container select.ql-ui {
						margin-bottom: 12px;
						border: 1px solid rgb(71 85 105);
						border-radius: 6px;
						background: rgb(30 41 59);
						padding: 4px 8px;
						color: rgb(226 232 240);
						font-family: var(--font-sans);
						font-size: 12px;
					}
					.ps-quill .ql-editor.ql-blank::before {
						color: rgb(100 116 139);
						font-style: normal;
					}
					.ps-quill .ql-toolbar button:hover,
					.ps-quill .ql-toolbar button:focus,
					.ps-quill .ql-toolbar .ql-picker-label:hover,
					.ps-quill .ql-toolbar .ql-picker-label:focus {
						color: rgb(33 77 192);
					}
					.ps-quill .ql-toolbar button:hover .ql-stroke,
					.ps-quill .ql-toolbar button:focus .ql-stroke,
					.ps-quill .ql-toolbar .ql-picker-label:hover .ql-stroke,
					.ps-quill .ql-toolbar .ql-picker-label:focus .ql-stroke {
						stroke: rgb(33 77 192);
					}
					.ps-quill .ql-toolbar button:hover .ql-fill,
					.ps-quill .ql-toolbar button:focus .ql-fill {
						fill: rgb(33 77 192);
					}
				`}</style>
			</div>
		);
	},
);

RichTextEditor.displayName = "RichTextEditor";

export default RichTextEditor;
