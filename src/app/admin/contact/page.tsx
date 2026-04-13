"use client";

import { createPortal } from "react-dom";
import { useMemo, useState } from "react";
import { AdminShell } from "../_components/AdminShell";
import Link from "next/link";
import { ContactTableSkeleton } from "../_components/Skeletons";
import { useAdminContactSubmissions } from "../_hooks/useAdminContactSubmissions";

import type { ContactSubmission, SubmissionStatus } from "../_api/contact";

function StatusPill({ status }: { status: SubmissionStatus }) {
  const cls =
    status === "new"
      ? "bg-sky-500/15 text-sky-700"
      : status === "in_progress"
        ? "bg-amber-500/15 text-amber-700"
        : "bg-emerald-500/15 text-emerald-700";
  return <span className={["inline-flex rounded-full px-3 py-1 text-xs font-semibold", cls].join(" ")}>{status.replace("_", " ")}</span>;
}

function formatDate(value: string | Date) {
  const d = typeof value === "string" ? new Date(value) : value;
  if (Number.isNaN(d.getTime())) return String(value);
  return d.toLocaleString();
}

export default function AdminContactPage() {
  const [menu, setMenu] = useState<null | { id: string; top: number; left: number }>(null);
  const [viewing, setViewing] = useState<ContactSubmission | null>(null);
  const { loading, err, items, updating, setStatus } = useAdminContactSubmissions();

  return (
    <AdminShell title="Contact Submissions" subtitle="Review incoming messages from the Contact Us page.">
      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          {loading ? (
            <div className="px-2 py-2">
              <ContactTableSkeleton rows={7} />
            </div>
          ) : err ? (
            <div className="px-6 py-6 text-sm text-rose-600">{err}</div>
          ) : items.length === 0 ? (
            <div className="px-6 py-10">
              <div className="mx-auto max-w-md text-center">
                <p className="text-base font-semibold text-secondary">No submissions yet</p>
                <p className="mt-2 text-sm text-slate-600">
                  When someone fills the Contact Us form, you’ll see it here to review and resolve.
                </p>
                <div className="mt-5 flex justify-center">
                  <Link
                    href="/contact-us"
                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                  >
                    View Contact Us page
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold text-slate-500">
                    <th scope="col" className="px-6 py-4">
                      Sender
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Reason
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-4">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-4 text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {items.map((c) => {
                    return (
                      <tr
                        key={c.id}
                        className="transition hover:bg-slate-50"
                      >
                        <td className="px-6 py-4 align-top">
                          <p className="max-w-[340px] truncate text-sm font-semibold text-secondary">
                            {c.fullName}
                          </p>
                          <p className="mt-1 max-w-[340px] truncate text-xs text-slate-500">
                            {c.email}
                          </p>
                        </td>
                        <td className="px-6 py-4 align-top text-sm text-slate-700">{c.reason}</td>
                        <td className="px-6 py-4 align-top">
                          <StatusPill status={c.status} />
                        </td>
                        <td className="px-6 py-4 align-top text-sm text-slate-700">
                          {formatDate(c.createdAt)}
                        </td>
                        <td className="px-6 py-4 align-top text-right">
                          <div className="inline-flex">
                            <button
                              type="button"
                              aria-label="Actions"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                const rect = (e.currentTarget as HTMLButtonElement).getBoundingClientRect();
                                const left = Math.min(window.innerWidth - 240, Math.max(12, rect.right - 220));
                                const top = rect.bottom + 8;
                                setMenu((prev) => (prev?.id === c.id ? null : { id: c.id, top, left }));
                              }}
                              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
                            >
                              <span className="text-lg leading-none">⋯</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
      </div>

      {menu
        ? createPortal(
            <div className="fixed inset-0 z-1000" onClick={() => setMenu(null)}>
              <div
                className="absolute w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg"
                style={{ top: menu.top, left: menu.left }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  type="button"
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                  onClick={() => {
                    const c = items.find((x) => x.id === menu.id);
                    if (c) setViewing(c);
                    setMenu(null);
                  }}
                >
                  View
                </button>
                <button
                  type="button"
                  disabled={updating}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={async () => {
                    const id = menu.id;
                    setMenu(null);
                    try {
                      await setStatus(id, "in_progress");
                    } catch (e) {
                      alert(e instanceof Error ? e.message : "Failed to update status");
                    }
                  }}
                >
                  Mark in progress
                </button>
                <button
                  type="button"
                  disabled={updating}
                  className="block w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                  onClick={async () => {
                    const id = menu.id;
                    setMenu(null);
                    try {
                      await setStatus(id, "resolved");
                    } catch (e) {
                      alert(e instanceof Error ? e.message : "Failed to update status");
                    }
                  }}
                >
                  Resolve
                </button>
              </div>
            </div>,
            document.body,
          )
        : null}

      {viewing ? (
        <div
          className="fixed inset-0 z-40 grid place-items-center bg-black/30 p-5"
          onClick={() => setViewing(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-base font-semibold text-secondary">{viewing.fullName}</p>
                <p className="mt-1 truncate text-sm text-slate-500">{viewing.email}</p>
              </div>
              <StatusPill status={viewing.status} />
            </div>

            <div className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Reason</p>
                <p className="mt-1 text-slate-800">{viewing.reason}</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Submitted</p>
                <p className="mt-1 text-slate-800">{formatDate(viewing.createdAt)}</p>
              </div>
              <div className="sm:col-span-2 rounded-xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold text-slate-500">Message</p>
                <p className="mt-2 whitespace-pre-wrap text-slate-800">{viewing.description}</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setViewing(null)}
                className="rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
              >
                Close
              </button>
              <button
                type="button"
                disabled={updating}
                onClick={async () => {
                  try {
                    await setStatus(viewing.id, "in_progress");
                    setViewing((prev) => (prev ? { ...prev, status: "in_progress" } : prev));
                  } catch (e) {
                    alert(e instanceof Error ? e.message : "Failed to update status");
                  }
                }}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Mark in progress
              </button>
              <button
                type="button"
                disabled={updating}
                onClick={async () => {
                  try {
                    await setStatus(viewing.id, "resolved");
                    setViewing((prev) => (prev ? { ...prev, status: "resolved" } : prev));
                  } catch (e) {
                    alert(e instanceof Error ? e.message : "Failed to update status");
                  }
                }}
                className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
              >
                Resolve
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </AdminShell>
  );
}

