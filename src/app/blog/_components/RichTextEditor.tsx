"use client";

import React, {
	useEffect,
	useRef,
	useImperativeHandle,
	forwardRef,
	useState,
} from "react";
import { useQuill } from "react-quilljs";
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
	toolbar: [
		["bold", "italic", "underline", "strike"],
		[{ align: [] }],
		[{ list: "ordered" }, { list: "bullet" }],
		[{ indent: "-1" }, { indent: "+1" }],
		[{ header: [1, 2, 3, 4, 5, 6, false] }],
		["link", "image", "video"],
		[{ color: [] }, { background: [] }],
	],
	clipboard: { matchVisual: false },
};

const QUILL_FORMATS = [
	"bold",
	"italic",
	"underline",
	"strike",
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
		const [mounted, setMounted] = useState(false);
		const initialSetRef = useRef(false);
		const onChangeRef = useRef(onChange);
		onChangeRef.current = onChange;

		const { quill, quillRef } = useQuill({
			theme: "snow",
			modules: QUILL_MODULES,
			formats: QUILL_FORMATS,
			placeholder,
		});

		// Only render Quill on client to avoid SSR/document issues
		useEffect(() => {
			setMounted(true);
		}, []);

		// Set initial content when quill is ready
		useEffect(() => {
			if (!quill || !mounted) return;
			if (!initialSetRef.current && (initialContent || initialContent === "")) {
				initialSetRef.current = true;
				quill.clipboard.dangerouslyPasteHTML(initialContent || "<p><br></p>");
			}
		}, [quill, mounted, initialContent]);

		// text-change handler for onChange
		useEffect(() => {
			if (!quill) return;
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

		if (!mounted) {
			return (
				<div
					className={`overflow-hidden rounded-2xl border border-slate-200 bg-white ${className}`}
					style={{ minHeight }}
				>
					<div className='animate-pulse p-4 text-sm text-slate-500'>
						Loading editor…
					</div>
				</div>
			);
		}

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
