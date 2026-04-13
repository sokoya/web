"use client";

import Image from "next/image";
import Link from "next/link";
import { createPortal } from "react-dom";
import { useMemo, useState } from "react";
import { AdminShell } from "../_components/AdminShell";
import { ConfirmModal } from "../_components/ConfirmModal";
import { PressTableSkeleton } from "../_components/Skeletons";
import { useAdminPressList } from "../_hooks/useAdminPressList";

function hostFromUrl(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return "—";
  }
}

export default function AdminPressListPage() {
  const { loading, err, items, deletingId, remove } = useAdminPressList();
  const [menu, setMenu] = useState<null | { id: string; top: number; left: number }>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const current = useMemo(() => items.find((x) => x.id === (menu?.id ?? "")), [items, menu?.id]);
  const deleting = useMemo(() => !!confirmDeleteId && deletingId === confirmDeleteId, [confirmDeleteId, deletingId]);

  return (
    <AdminShell
      title="Press"
      subtitle="Manage external press links and featured articles."
      actions={
        <Link href="/admin/press/new" className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white">
          New press item
        </Link>
      }
    >
      {err ? (
        <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{err}</div>
      ) : null}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        {loading ? (
          <div className="px-2 py-2">
            <PressTableSkeleton rows={7} />
          </div>
        ) : items.length === 0 ? (
          <div className="px-6 py-10">
            <div className="mx-auto max-w-md text-center">
              <p className="text-base font-semibold text-secondary">No press items yet</p>
              <p className="mt-2 text-sm text-slate-600">Add links to external posts (Medium, news sites, etc.).</p>
              <div className="mt-5 flex justify-center">
                <Link
                  href="/admin/press/new"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Create press item
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[920px] border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold text-slate-500">
                  <th scope="col" className="px-6 py-4">
                    Article
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Read time
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Source
                  </th>
                  <th scope="col" className="px-6 py-4 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {items.map((p) => (
                  <tr key={p.id} className="transition hover:bg-slate-50">
                    <td className="px-6 py-4 align-top">
                      <div className="flex items-start gap-3">
                        <div className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                          {p.thumbnail?.trim() ? (
                            <Image src={p.thumbnail} alt="" fill className="object-cover" sizes="40px" />
                          ) : (
                            <div className="grid h-full w-full place-items-center text-[10px] font-semibold text-slate-400">
                              —
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <p className="max-w-[520px] truncate text-sm font-semibold text-secondary">{p.title}</p>
                          <a
                            href={p.url}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-1 block max-w-[520px] truncate text-xs text-slate-500 hover:underline"
                          >
                            {p.url}
                          </a>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 align-top text-sm text-slate-700">{p.date}</td>
                    <td className="px-6 py-4 align-top text-sm text-slate-700">{p.readTime}</td>
                    <td className="px-6 py-4 align-top">
                      <span className="inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700">
                        {hostFromUrl(p.url)}
                      </span>
                    </td>
                    <td className="px-6 py-4 align-top text-right">
                      <div className="inline-flex">
                        <button
                          type="button"
                          aria-label="Actions"
                          disabled={deletingId === p.id}
                          onMouseDown={(e) => {
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

      {menu
        ? createPortal(
            <div className="fixed inset-0 z-1000" onClick={() => setMenu(null)}>
              <div
                className="absolute w-60 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
                style={{ top: menu.top, left: menu.left }}
                onClick={(e) => e.stopPropagation()}
              >
                <Link
                  href={`/admin/press/${menu.id}/edit`}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setMenu(null)}
                >
                  Edit
                </Link>
                <a
                  href={current?.url ?? "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => setMenu(null)}
                >
                  Open link
                </a>
                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left text-sm text-rose-700 hover:bg-rose-50 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!!deletingId}
                  onClick={() => {
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
        title="Delete press item?"
        description="This only removes the link from your Press page. It won’t affect the external article."
        confirmText="Delete"
        cancelText="Cancel"
        danger
        busy={deleting}
        onClose={() => {
          if (deletingId) return;
          setConfirmDeleteId(null);
        }}
        onConfirm={async () => {
          if (!confirmDeleteId) return;
          const id = confirmDeleteId;
          await remove(id);
          setConfirmDeleteId(null);
        }}
      />
    </AdminShell>
  );
}

