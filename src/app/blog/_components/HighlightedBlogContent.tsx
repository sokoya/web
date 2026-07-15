"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js";

type HighlightedBlogContentProps = {
  html: string;
};

function highlightCodeBlock(element: HTMLElement) {
  const lines = element.matches(".ql-code-block-container")
    ? Array.from(element.querySelectorAll<HTMLElement>(".ql-code-block")).map((line) => line.textContent ?? "")
    : [];
  const code = lines.length ? lines.join("\n") : element.textContent ?? "";
  const languageElement = element.querySelector<HTMLElement>(".ql-code-block[data-language]");
  const language = element.dataset.language || languageElement?.dataset.language;

  let highlighted;
  if (language && language !== "plain" && hljs.getLanguage(language)) {
    highlighted = hljs.highlight(code, { language, ignoreIllegals: true });
  } else {
    highlighted = hljs.highlightAuto(code);
  }

  element.innerHTML = highlighted.value;
  element.classList.add("hljs");
  if (highlighted.language) element.dataset.highlightedLanguage = highlighted.language;
}

export function HighlightedBlogContent({ html }: HighlightedBlogContentProps) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    content
      .querySelectorAll<HTMLElement>("pre, .ql-code-block-container")
      .forEach(highlightCodeBlock);
  }, [html]);

  return <div ref={contentRef} dangerouslySetInnerHTML={{ __html: html }} />;
}
