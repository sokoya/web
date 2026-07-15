"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminShell } from "@/app/admin/_components/AdminShell";
import { getApiErrorMessage } from "@/app/admin/_api/client";
import { BlogPostDetail, getPost } from "@/app/admin/_api/blog";
import { HighlightedBlogContent } from "@/app/blog/_components/HighlightedBlogContent";

export default function AdminBlogPreviewPage() {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPostDetail | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPost() {
      try {
        const data = await getPost(id);
        if (!cancelled) setPost(data.post);
      } catch (cause) {
        if (!cancelled) setError(getApiErrorMessage(cause, "Unable to load preview"));
      }
    }

    void loadPost();
    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <AdminShell
      title="Post preview"
      subtitle="This preview is visible only to signed-in administrators."
      actions={
        <div className="flex items-center gap-2">
          <Link href="/admin/blog" className="rounded-full bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-700">
            Back
          </Link>
          <Link href={`/admin/blog/${id}/edit`} className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white">
            Edit post
          </Link>
        </div>
      }
    >
      {error ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div>
      ) : !post ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-sm text-slate-600">Loading preview...</div>
      ) : (
        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <header className="relative min-h-72 overflow-hidden bg-secondary px-6 py-12 sm:px-10">
            {post.coverImageUrl ? (
              <Image src={post.coverImageUrl} alt="" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" priority />
            ) : null}
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white">
                {post.status === "published" ? "Published" : "Unpublished draft"}
              </span>
              <h1 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">{post.title}</h1>
              <p className="mt-4 text-sm text-white/80">{post.category}</p>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-6 py-12 sm:px-10">
            {post.excerpt ? <p className="mb-8 text-lg leading-relaxed text-slate-600">{post.excerpt}</p> : null}
            <div className="blog-post-content">
              <HighlightedBlogContent html={post.contentHtml ?? ""} />
            </div>
          </div>
        </article>
      )}
    </AdminShell>
  );
}
