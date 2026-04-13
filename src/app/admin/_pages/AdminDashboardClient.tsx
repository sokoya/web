"use client";

import { useMemo } from "react";
import Link from "next/link";
import { AdminShell } from "../_components/AdminShell";
import { DashboardSkeleton } from "../_components/Skeletons";
import { useAdminDashboard } from "../_hooks/useAdminDashboard";

function StatCard({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-semibold text-slate-500">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-secondary">{value}</p>
      <p className="mt-2 text-sm text-slate-500">{hint}</p>
    </div>
  );
}

export default function AdminDashboardClient() {
  const { loading, err, published, drafts, newContacts, recentPosts, recentContacts } = useAdminDashboard();

  const subtitle = useMemo(() => {
    if (loading) return "Loading overview…";
    if (err) return "Unable to load overview.";
    return "Overview of blog content and incoming contact requests.";
  }, [err, loading]);

  return (
    <AdminShell
      title="Dashboard"
      subtitle={subtitle}
      actions={
        <>
          <Link href="/admin/blog/new" className="rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white">
            New post
          </Link>
          <Link href="/admin/contact" className="rounded-full bg-blue-100 px-6 py-3 text-sm font-semibold text-primary">
            View submissions
          </Link>
        </>
      }
    >
      {err ? (
        <div className="mb-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{err}</div>
      ) : null}

      {loading ? <DashboardSkeleton /> : null}

      {!loading ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <StatCard label="Published posts" value={String(published)} hint="Visible on the public blog." />
            <StatCard label="Draft posts" value={String(drafts)} hint="Not yet published." />
            <StatCard label="New contact requests" value={String(newContacts)} hint="Needs review." />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-secondary">Recent posts</h2>
                  <p className="mt-1 text-sm text-slate-500">Quick access to edit.</p>
                </div>
                <Link href="/admin/blog" className="text-sm font-semibold text-secondary hover:underline">
                  View all
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {recentPosts.map((p) => (
                  <Link
                    key={p.id}
                    href={`/admin/blog/${p.id}/edit`}
                    className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:bg-slate-50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-secondary">{p.title}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {p.category} • Updated {p.updatedAt ? new Date(p.updatedAt).toLocaleDateString() : "—"}
                        </p>
                      </div>
                      <span
                        className={[
                          "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                          p.status === "published" ? "bg-emerald-500/15 text-emerald-700" : "bg-amber-500/15 text-amber-700",
                        ].join(" ")}
                      >
                        {p.status}
                      </span>
                    </div>
                  </Link>
                ))}
                {recentPosts.length === 0 ? <p className="text-sm text-slate-600">No posts yet.</p> : null}
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-base font-semibold text-secondary">Latest contact submissions</h2>
                  <p className="mt-1 text-sm text-slate-500">Review and track status.</p>
                </div>
                <Link href="/admin/contact" className="text-sm font-semibold text-secondary hover:underline">
                  Open inbox
                </Link>
              </div>
              <div className="mt-4 space-y-3">
                {recentContacts.map((c) => (
                  <div key={c.id} className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-secondary">{c.fullName}</p>
                        <p className="mt-1 text-xs text-slate-500">
                          {c.reason} • {c.createdAt ? new Date(c.createdAt).toLocaleString() : "—"}
                        </p>
                      </div>
                      <span
                        className={[
                          "shrink-0 rounded-full px-3 py-1 text-xs font-semibold",
                          c.status === "new"
                            ? "bg-sky-500/15 text-sky-700"
                            : c.status === "in_progress"
                              ? "bg-amber-500/15 text-amber-700"
                              : "bg-emerald-500/15 text-emerald-700",
                        ].join(" ")}
                      >
                        {String(c.status).replace("_", " ")}
                      </span>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm text-slate-600">{c.description}</p>
                  </div>
                ))}
                {recentContacts.length === 0 ? <p className="text-sm text-slate-600">No submissions yet.</p> : null}
              </div>
            </div>
          </div>
        </>
      ) : null}
    </AdminShell>
  );
}

