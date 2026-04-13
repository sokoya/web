"use client";

import { createPortal } from "react-dom";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AdminShell } from "../_components/AdminShell";
import { ConfirmModal } from "../_components/ConfirmModal";
import { BlogTableSkeleton } from "../_components/Skeletons";

import { useAdminBlogList } from "../_hooks/useAdminBlogList";

export default function AdminBlogListPage() {
  const [menu, setMenu] = useState<null | { id: string; top: number; left: number }>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const {
    loading,
    err,
    rows,
    total,
    page,
    setPage,
    totalPages,
    updating,
    updatingId,
    updateStatus,
    removePost,
  } = useAdminBlogList();

  const currentDeleteBusy = useMemo(() => !!confirmDeleteId && updatingId === confirmDeleteId, [confirmDeleteId, updatingId]);

  return (
    <AdminShell
      title="Blog"
      subtitle="Create, edit, and publish posts."
      actions={
        <Link href="/admin/blog/new" className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white">
          New post
        </Link>
      }
    >
      {err ? (
        <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
          {err}
        </div>
      ) : null}
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="px-2 py-2">
            <BlogTableSkeleton rows={7} />
          </div>
        ) : err ? (
          <div className="px-6 py-6 text-sm text-rose-600">{err}</div>
        ) : rows.length === 0 ? (
          <div className="px-6 py-10">
            <div className="mx-auto max-w-md text-center">
              <p className="text-base font-semibold text-secondary">No blog posts yet</p>
              <p className="mt-2 text-sm text-slate-600">
                Create your first post to start publishing updates and product stories.
              </p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/admin/blog/new"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Create post
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold text-slate-500">
                  <th scope="col" className="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Updated
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {rows.map((p) => (
                  <tr key={p.id} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 align-top">
                      <div className="flex items-start gap-3">
                        <div className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                          {p.coverImageUrl ? (
                            <Image
                              src={p.coverImageUrl}
                              alt=""
                              fill
                              className="object-cover"
                              sizes="40px"
                            />
                          ) : (
                            <div className="grid h-full w-full place-items-center text-[10px] font-semibold text-slate-400">
                              —
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="max-w-[380px] truncate text-sm font-semibold text-secondary">{p.title}</p>
                          <p className="mt-1 max-w-[380px] truncate text-xs text-slate-500">/{p.slug}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-700">{p.category}</td>
                    <td className="px-6 py-4 align-top">
                      <span
                        className={[
                          "inline-flex rounded-full px-3 py-1 text-xs font-semibold",
                          p.status === "published"
                            ? "bg-emerald-500/15 text-emerald-700"
                            : "bg-amber-500/15 text-amber-700",
                        ].join(" ")}
                      >
                        {p.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-700">
                      {p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : "—"}
                    </td>
                    <td className="px-6 py-4 align-top text-right">
                      <div className="inline-flex">
                        <button
                          type="button"
                          aria-label="Actions"
                          disabled={updatingId === p.id}
                          onMouseDown={(e) => {
                            // Prevent row selection / blur quirks.
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                            const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                            const left = Math.min(window.innerWidth - 260, Math.max(12, rect.right - 240));
                            const top = rect.bottom + 8;
                            setMenu((prev) => (prev?.id === p.id ? null : { id: p.id, top, left }));
                          }}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <span className="text-lg leading-none">⋯</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-slate-600">
        <p>
          Page <span className="font-semibold text-secondary">{page}</span> of{" "}
          <span className="font-semibold text-secondary">{totalPages}</span> •{" "}
          <span className="font-semibold text-secondary">{total}</span> posts
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-disabled={page <= 1}
            className={[
              "rounded-full px-4 py-2 text-xs font-semibold transition",
              page <= 1 ? "cursor-not-allowed bg-slate-100 text-slate-400" : "bg-slate-900 text-white hover:bg-slate-800",
            ].join(" ")}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </button>
          <button
            type="button"
            aria-disabled={page >= totalPages}
            className={[
              "rounded-full px-4 py-2 text-xs font-semibold transition",
              page >= totalPages ? "cursor-not-allowed bg-slate-100 text-slate-400" : "bg-slate-900 text-white hover:bg-slate-800",
            ].join(" ")}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </button>
        </div>
      </div>

      {menu
        ? createPortal(
            <div
              className="fixed inset-0 z-1000"
              onClick={() => setMenu(null)}
            >
              <div
                className="absolute w-60 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
                style={{ top: menu.top, left: menu.left }}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href={`/admin/blog/${menu.id}/edit`}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setMenu(null)}
                >
                  Edit
                </Link>
                <button
                  type="button"
                  disabled={updating}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={async () => {
                    const p = rows.find((x) => x.id === menu.id);
                    setMenu(null);
                    if (!p) return;
                    await updateStatus(menu.id, p.status === "published" ? "draft" : "published");
                  }}
                >
                  {rows.find((x) => x.id === menu.id)?.status === "published" ? "Unpublish" : "Publish"}
                </button>
                <button
                  type="button"
                  disabled={updating}
                  className="block w-full px-4 py-3 text-left text-sm text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={async () => {
                    const id = menu.id;
                    setMenu(null);
                    setConfirmDeleteId(id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}

      <ConfirmModal
        open={!!confirmDeleteId}
        title="Delete blog post?"
        description="This will permanently remove the post and its cover image from storage (if any). This action can’t be undone."
        confirmText="Delete"
        cancelText="Cancel"
        danger
        busy={currentDeleteBusy}
        onClose={() => {
          if (updatingId) return;
          setConfirmDeleteId(null);
        }}
        onConfirm={async () => {
          if (!confirmDeleteId) return;
          const id = confirmDeleteId;
          await removePost(id);
          setConfirmDeleteId(null);
        }}
      />
    </AdminShell>
  );
}

