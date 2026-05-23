"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { AdminShell } from "@/app/admin/_components/AdminShell";
import RichTextEditor from "@/app/blog/_components/RichTextEditor";
import { ConfirmModal } from "@/app/admin/_components/ConfirmModal";
import { getApiErrorMessage } from "@/app/admin/_api/client";
import { getPost, updatePost } from "@/app/admin/_api/blog";
import { deleteImage, uploadImage } from "@/app/admin/_api/upload";

type Category = "Company" | "Product" | "Finance" | "API";

export default function AdminBlogEditPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<Category>("Product");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [coverImageUrl, setCoverImageUrl] = useState<string>("");
  const [coverImagePublicId, setCoverImagePublicId] = useState<string>("");
  const [pendingCoverFile, setPendingCoverFile] = useState<File | null>(null);
  const [pendingCoverPreviewUrl, setPendingCoverPreviewUrl] = useState<string>("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const disabled = useMemo(() => !title.trim() || !slug.trim(), [title, slug]);

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    if (!id) return;
    setErr(null);
    setSaving(true);
    try {
      let finalCoverUrl = coverImageUrl || "";
      let finalCoverPublicId = coverImagePublicId || "";
      if (pendingCoverFile) {
        setUploadingCover(true);
        try {
          // Requirement: delete former cover first, then upload new.
          if (finalCoverPublicId) {
            await deleteImage(finalCoverPublicId);
            finalCoverPublicId = "";
          }
          const uploaded = await uploadImage(pendingCoverFile);
          finalCoverUrl = uploaded.url;
          finalCoverPublicId = uploaded.publicId;
          setCoverImageUrl(uploaded.url);
          setCoverImagePublicId(uploaded.publicId);
          setPendingCoverFile(null);
          setPendingCoverPreviewUrl("");
        } finally {
          setUploadingCover(false);
        }
      }

      await updatePost(id, {
        title,
        slug,
        excerpt,
        category,
        status,
        contentHtml: content,
        coverImageUrl: finalCoverUrl || null,
        coverImagePublicId: finalCoverPublicId || null,
      });
      setToast("Blog post updated successfully.");
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to save post"));
    } finally {
      setSaving(false);
    }
  }

  async function onDelete() {
    if (!id) return;
    setErr(null);
    setSaving(true);
    try {
      const res = await fetch(`/api/admin/blog/${id}`, { method: "DELETE" });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setErr(data.error || "Failed to delete post");
        return;
      }
      window.location.href = "/admin/blog";
    } finally {
      setSaving(false);
    }
  }

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!id) return;
      setLoading(true);
      setErr(null);
      try {
        const data = await getPost(id);
        if (!data?.post) throw new Error("Post not found");
        if (cancelled) return;
        const p = data.post as any;
        setTitle(p.title ?? "");
        setSlug(p.slug ?? "");
        setExcerpt(p.excerpt ?? "");
        setCategory((p.category as Category) ?? "Product");
        setStatus((p.status as "draft" | "published") ?? "draft");
        setContent(p.contentHtml ?? "");
        setCoverImageUrl(p.coverImageUrl ?? "");
        setCoverImagePublicId(p.coverImagePublicId ?? "");
        setInitialLoaded(true);
      } catch (e) {
        if (!cancelled) setErr(getApiErrorMessage(e, "Post not found"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [id]);

  useEffect(() => {
    return () => {
      if (pendingCoverPreviewUrl) URL.revokeObjectURL(pendingCoverPreviewUrl);
    };
  }, [pendingCoverPreviewUrl]);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 2500);
    return () => window.clearTimeout(t);
  }, [toast]);

  if (loading) {
    return (
      <AdminShell title="Edit post" subtitle="Loading…">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          Loading…
        </div>
      </AdminShell>
    );
  }

  if (err && !initialLoaded) {
    return (
      <AdminShell
        title="Post not found"
        subtitle="Unable to load this post."
        actions={
          <Link href="/admin/blog" className="rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-primary">
            Back
          </Link>
        }
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">
          {err}
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell
      title="Edit post"
      subtitle="Edit and update your post."
      actions={
        <Link href="/admin/blog" className="rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-primary">
          Back
        </Link>
      }
    >
      {toast ? (
        <div className="fixed right-5 top-20 z-1000">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800 shadow-lg">
            {toast}
          </div>
        </div>
      ) : null}
      <form onSubmit={onSave} className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span
                className={[
                  "rounded-full px-3 py-1 text-xs font-semibold",
                  status === "published" ? "bg-emerald-500/15 text-emerald-700" : "bg-amber-500/15 text-amber-700",
                ].join(" ")}
              >
                {status}
              </span>
              <p className="text-xs text-slate-500">Changes are saved to MongoDB.</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setStatus("draft")}
                className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-800"
              >
                Set draft
              </button>
              <button
                type="button"
                onClick={() => setStatus("published")}
                className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white transition hover:opacity-95"
              >
                Publish
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-[260px,1fr]">
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">Cover image</p>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3">
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl bg-white">
                  {pendingCoverPreviewUrl || coverImageUrl ? (
                    <Image
                      src={pendingCoverPreviewUrl || coverImageUrl}
                      alt="Cover preview"
                      fill
                      className="object-cover"
                      sizes="260px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-xs text-slate-500">
                      No cover selected
                    </div>
                  )}
                </div>
                <div className="mt-3 flex items-center justify-between gap-3">
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-secondary px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-900">
                    {pendingCoverFile ? "Replace" : coverImageUrl ? "Replace" : "Upload"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={uploadingCover || saving}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        if (pendingCoverPreviewUrl) URL.revokeObjectURL(pendingCoverPreviewUrl);
                        setPendingCoverFile(file);
                        setPendingCoverPreviewUrl(URL.createObjectURL(file));
                        e.target.value = "";
                      }}
                    />
                  </label>
                  {pendingCoverPreviewUrl || coverImageUrl ? (
                    <button
                      type="button"
                      onClick={() => {
                        if (pendingCoverPreviewUrl) URL.revokeObjectURL(pendingCoverPreviewUrl);
                        setPendingCoverPreviewUrl("");
                        setPendingCoverFile(null);
                        setCoverImageUrl("");
                      }}
                      className="text-xs font-semibold text-slate-600 hover:text-secondary"
                      disabled={uploadingCover || saving}
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              </div>
              <p className="text-xs text-slate-500">Uploaded to Cloudinary on save.</p>
            </div>

            <div className="grid gap-4">
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary placeholder-slate-400 outline-none focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="slug">
                Slug
              </label>
              <input
                id="slug"
                value={slug}
                onChange={(e) => setSlug(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary placeholder-slate-400 outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="category">
                Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value as Category)}
                className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-700 outline-none focus:border-primary"
              >
                <option value="Company">Company</option>
                <option value="Product">Product</option>
                <option value="Finance">Finance</option>
                <option value="API">API</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="excerpt">
                Excerpt
              </label>
              <input
                id="excerpt"
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary placeholder-slate-400 outline-none focus:border-primary"
              />
            </div>
          </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="content">
              Content
            </label>
            <RichTextEditor
              initialContent={content}
              onChange={setContent}
              placeholder="Write your post content here…"
              minHeight="360px"
            />
          </div>

          {err ? (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {err}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              disabled={saving || uploadingCover}
              className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Delete
            </button>
            <button
              type="submit"
              disabled={disabled}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </form>

      <ConfirmModal
        open={confirmDelete}
        title="Delete blog post?"
        description="This will permanently remove the post and its cover image from storage (if any). This action can’t be undone."
        confirmText="Delete"
        cancelText="Cancel"
        danger
        busy={saving}
        onClose={() => {
          if (saving) return;
          setConfirmDelete(false);
        }}
        onConfirm={async () => {
          await onDelete();
          setConfirmDelete(false);
        }}
      />
    </AdminShell>
  );
}

