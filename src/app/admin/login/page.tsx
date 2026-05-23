"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { heroDropFromTop, inViewZoom } from "@/lib/animations";
import { isAdminAuthed, setAdminAuthed, setAdminEmail } from "../_components/adminAuth";
import { getApiErrorMessage } from "../_api/client";
import { login } from "../_api/auth";

function AdminLoginPageInner() {
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = !!prefersReducedMotion;
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/admin";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const disabled = useMemo(() => !email.trim() || !password.trim(), [email, password]);

  useEffect(() => {
    if (isAdminAuthed()) {
      router.replace(next);
    }
  }, [next, router]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await login({ email, password });
      // Keep existing UI guard behavior for now.
      setAdminAuthed(true);
      setAdminEmail(email.trim().toLowerCase());
      router.replace(next);
    } catch (e) {
      setErr(getApiErrorMessage(e, "Login failed"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-secondary text-white">
      <main className="business-hero px-5 py-24 md:py-32">
        <motion.div {...heroDropFromTop({ reduced: reducedMotion, delay: 0.05 })} className="mx-auto max-w-lg text-center">
          <motion.h1
            {...heroDropFromTop({ reduced: reducedMotion, delay: 0.14, duration: 0.95 })}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Admin Login
          </motion.h1>
          <motion.p
            {...heroDropFromTop({ reduced: reducedMotion, delay: 0.26, duration: 0.9 })}
            className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base"
          >
            Sign in to manage blog content and contact submissions.
          </motion.p>
        </motion.div>

        <motion.div
          {...inViewZoom({ reduced: reducedMotion, delay: 0.12, duration: 0.95, amount: 0.25 })}
          className="mx-auto mt-10 max-w-lg rounded-2xl border border-slate-700 bg-[#FFFFFF0D] p-6 shadow-xl md:p-8"
        >
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@payscribe.ng"
                className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium text-slate-200">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter"
                className="w-full rounded-xl border border-slate-600 bg-slate-700/50 px-4 py-3 text-white placeholder-slate-400 outline-none focus:border-primary"
              />
              <p className="text-xs text-slate-400">UI-only: any non-empty credentials will work for now.</p>
            </div>

            {err ? (
              <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-100">
                {err}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={disabled || loading}
              className="w-full rounded-full bg-white px-8 py-3 text-sm font-semibold text-secondary transition disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>

            <div className="flex items-center justify-between text-xs text-slate-400">
              <Link href="/" className="hover:text-white">
                Back to site
              </Link>
              <span>Admin Portal</span>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={null}>
      <AdminLoginPageInner />
    </Suspense>
  );
}

