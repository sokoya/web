"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AdminShell } from "../../_components/AdminShell";
import { useAdminPressCreate } from "../../_hooks/useAdminPressCreate";

export default function AdminPressNewPage() {
  const { saving, err, onCreate, setErr } = useAdminPressCreate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [summary, setSummary] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");

  const disabled = useMemo(() => !title.trim() || !date.trim() || !readTime.trim() || !summary.trim() || !url.trim(), [
    title,
    date,
    readTime,
    summary,
    url,
  ]);

  async function onSave(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    await onCreate({ title, date, readTime, summary, thumbnail, url });
  }

  return (
    <AdminShell
      title="New press item"
      subtitle="Add a link to an external press article."
      actions={
        <Link href="/admin/press" className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
          Back
        </Link>
      }
    >
      <form onSubmit={onSave} className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="title">
                Title
              </label>
              <input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="url">
                URL
              </label>
              <input
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://…"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
              />
              <p className="text-xs text-slate-500">This link is what users will click on the Press page.</p>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="date">
                Date
              </label>
              <input
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Oct 21, 2025"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="readTime">
                Read time
              </label>
              <input
                id="readTime"
                value={readTime}
                onChange={(e) => setReadTime(e.target.value)}
                placeholder="3 min read"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700" htmlFor="thumbnail">
                Thumbnail URL (optional)
              </label>
              <input
                id="thumbnail"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
                placeholder="https://…"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
              />
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <label className="block text-sm font-medium text-slate-700" htmlFor="summary">
              Summary
            </label>
            <textarea
              id="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows={6}
              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
            />
          </div>

          {err ? (
            <div className="mt-4 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">{err}</div>
          ) : null}

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={disabled || saving}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Creating…" : "Create"}
            </button>
          </div>
        </div>
      </form>
    </AdminShell>
  );
}

