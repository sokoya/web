"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminShell } from "../../_components/AdminShell";
import RichTextEditor from "@/app/blog/_components/RichTextEditor";
import { getApiErrorMessage } from "../../_api/client";
import { createPost } from "../../_api/blog";
import { uploadImage } from "../../_api/upload";

type Category = "Company" | "Product" | "Finance" | "API";

export default function AdminBlogNewPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState<Category>("Product");
  const [content, setContent] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState<string>("");
  const [coverImagePublicId, setCoverImagePublicId] = useState<string>("");
  const [pendingCoverFile, setPendingCoverFile] = useState<File | null>(null);
  const [pendingCoverPreviewUrl, setPendingCoverPreviewUrl] = useState<string>("");
  const [uploadingCover, setUploadingCover] = useState(false);
  const [saving, setSaving] = useState<"draft" | "published" | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const disabled = useMemo(() => !title.trim() || !slug.trim(), [title, slug]);

  async function save(status: "draft" | "published") {
    setErr(null);
    setSaving(status);
    try {
      let finalCoverUrl = coverImageUrl || "";
      let finalCoverPublicId = coverImagePublicId || "";
      if (pendingCoverFile) {
        setUploadingCover(true);
        try {
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

      await createPost({
        title,
        slug,
        excerpt,
        category,
        status,
        contentHtml: content,
        coverImageUrl: finalCoverUrl || null,
        coverImagePublicId: finalCoverPublicId || null,
      });
      router.replace("/admin/blog");
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to save post"));
    } finally {
      setSaving(null);
    }
  }

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    await save("published");
  }

  function slugify(value: string) {
    return value
      .trim()
      .toLowerCase()
      .replace(/['"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "")
      .slice(0, 80);
  }

  useEffect(() => {
    if (slugTouched) return;
    const next = slugify(title);
    setSlug(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, slugTouched]);

  useEffect(() => {
    // Cleanup object URLs when replaced/unmounted.
    return () => {
      if (pendingCoverPreviewUrl) URL.revokeObjectURL(pendingCoverPreviewUrl);
    };
  }, [pendingCoverPreviewUrl]);

  return (
    <AdminShell
      title="New post"
      subtitle="Create and publish a new blog post."
      actions={
        <Link
          href="/admin/blog"
          className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          Back
        </Link>
      }
    >
      <form onSubmit={onSave} className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 grid gap-4 md:grid-cols-[260px,1fr]">
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
                      disabled={uploadingCover || saving !== null}
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        if (!file) return;
                        setErr(null);
                        // Stage locally; upload on final submit.
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
                      disabled={uploadingCover || saving !== null}
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Selected now, uploaded to Cloudinary on publish/save.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700" htmlFor="title">
                    Title
                  </label>
                  <input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter"
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
                    onChange={(e) => {
                      setSlugTouched(true);
                      setSlug(slugify(e.target.value));
                    }}
                    placeholder="payments-that-feel-invisible"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary placeholder-slate-400 outline-none focus:border-primary"
                  />
                  <p className="text-xs text-slate-500">
                    Auto-generated from title. You can edit it.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
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
                    placeholder="Short summary shown in lists…"
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary placeholder-slate-400 outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">Tip</p>
                <p className="mt-1 text-sm text-slate-700">
                  Use a clear title and a short excerpt — they show up on the blog listing.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-xs font-semibold text-slate-500">Cover image</p>
                <p className="mt-1 text-sm text-slate-700">
                  Recommended: 1600×1000px. JPG/PNG/WebP.
                </p>
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
            <p className="text-xs text-slate-500">
              Images inserted in the editor are stored inline. Cover image uploads to Cloudinary.
            </p>
          </div>

          {err ? (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {err}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              disabled={disabled || uploadingCover || saving !== null}
              onClick={async () => save("draft")}
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              {saving === "draft" ? "Saving…" : "Save draft"}
            </button>
            <button
              type="submit"
              disabled={disabled || uploadingCover || saving !== null}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving === "published" ? "Saving…" : "Publish"}
            </button>
          </div>
        </div>
      </form>
    </AdminShell>
  );
}

