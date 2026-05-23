"use client";

import React from "react";

function Skeleton({ className = "" }: { className?: string }) {
  return <div className={["animate-pulse rounded-xl bg-slate-100", className].join(" ")} />;
}

export function DashboardSkeleton() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <Skeleton className="h-3 w-28 rounded-md" />
            <Skeleton className="mt-3 h-10 w-20 rounded-lg" />
            <Skeleton className="mt-3 h-4 w-44 rounded-md" />
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Skeleton className="h-4 w-32 rounded-md" />
                <Skeleton className="mt-2 h-4 w-44 rounded-md" />
              </div>
              <Skeleton className="h-4 w-16 rounded-md" />
            </div>
            <div className="mt-5 space-y-3">
              {Array.from({ length: 3 }).map((__, j) => (
                <div key={j} className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Skeleton className="h-4 w-3/4 rounded-md" />
                      <Skeleton className="mt-2 h-3 w-1/2 rounded-md" />
                    </div>
                    <Skeleton className="h-6 w-20 rounded-full" />
                  </div>
                  <Skeleton className="mt-3 h-3 w-full rounded-md" />
                  <Skeleton className="mt-2 h-3 w-11/12 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function BlogTableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
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
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="px-6 py-4 align-top">
                <div className="flex items-start gap-3">
                  <Skeleton className="mt-0.5 h-10 w-10 rounded-xl" />
                  <div className="min-w-0 flex-1">
                    <Skeleton className="h-4 w-3/5 rounded-md" />
                    <Skeleton className="mt-2 h-3 w-2/5 rounded-md" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-24 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-6 w-24 rounded-full" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-20 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top text-right">
                <div className="inline-flex justify-end">
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ContactTableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
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
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-40 rounded-md" />
                <Skeleton className="mt-2 h-3 w-48 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-24 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-6 w-28 rounded-full" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-32 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top text-right">
                <div className="inline-flex justify-end">
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PressTableSkeleton({ rows = 6 }: { rows?: number }) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[920px] border-collapse">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs font-semibold text-slate-500">
            <th scope="col" className="px-6 py-4">
              Title
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
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              <td className="px-6 py-4 align-top">
                <div className="flex items-start gap-3">
                  <Skeleton className="mt-0.5 h-10 w-10 rounded-xl" />
                  <div className="min-w-0 flex-1">
                    <Skeleton className="h-4 w-3/4 rounded-md" />
                    <Skeleton className="mt-2 h-3 w-1/2 rounded-md" />
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-24 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-4 w-20 rounded-md" />
              </td>
              <td className="px-6 py-4 align-top">
                <Skeleton className="h-6 w-20 rounded-full" />
              </td>
              <td className="px-6 py-4 align-top text-right">
                <div className="inline-flex justify-end">
                  <Skeleton className="h-9 w-9 rounded-full" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

