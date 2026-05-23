"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AdminShell } from "@/app/admin/_components/AdminShell";
import { ConfirmModal } from "@/app/admin/_components/ConfirmModal";
import { useAdminPressEdit } from "@/app/admin/_hooks/useAdminPressEdit";

export default function AdminPressEditPage() {
  const [confirmDelete, setConfirmDelete] = useState(false);
  const {
    loading,
    initialLoaded,
    err,
    saving,
    disabled,
    title,
    setTitle,
    date,
    setDate,
    readTime,
    setReadTime,
    summary,
    setSummary,
    thumbnail,
    setThumbnail,
    url,
    setUrl,
    onSave,
    onDelete,
  } = useAdminPressEdit();

  if (loading) {
    return (
      <AdminShell title="Edit press item" subtitle="Loading…">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">Loading…</div>
      </AdminShell>
    );
  }

  if (err && !initialLoaded) {
    return (
      <AdminShell
        title="Not found"
        subtitle="Unable to load this press item."
        actions={
          <Link href="/admin/press" className="rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-primary">
            Back
          </Link>
        }
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-sm">{err}</div>
      </AdminShell>
    );
  }

  return (
    <AdminShell
      title="Edit press item"
      subtitle="Update metadata for an external press link."
      actions={
        <Link href="/admin/press" className="rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-primary">
          Back
        </Link>
      }
    >
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          await onSave();
        }}
        className="space-y-4"
      >
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
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-secondary outline-none focus:border-primary"
              />
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

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              disabled={saving}
              className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Delete
            </button>
            <button
              type="submit"
              disabled={disabled || saving}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save"}
            </button>
          </div>
        </div>
      </form>

      <ConfirmModal
        open={confirmDelete}
        title="Delete press item?"
        description="This only removes the link from your Press page. It won’t affect the external article."
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

