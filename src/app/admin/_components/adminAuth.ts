"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { usePathname, useRouter } from "next/navigation";
import { me } from "../_api/auth";

const STORAGE_KEY = "ps_admin_authed";
const STORAGE_EMAIL_KEY = "ps_admin_email";

export function isAdminAuthed(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(STORAGE_KEY) === "true";
}

export function setAdminAuthed(value: boolean) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, value ? "true" : "false");
  // Let all listeners (including this tab) update.
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_KEY }));
}

export function setAdminEmail(email: string) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_EMAIL_KEY, email);
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_EMAIL_KEY }));
}

export function clearAdminEmail() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_EMAIL_KEY);
  window.dispatchEvent(new StorageEvent("storage", { key: STORAGE_EMAIL_KEY }));
}

function getEmailSnapshot() {
  if (typeof window === "undefined") return "";
  return window.localStorage.getItem(STORAGE_EMAIL_KEY) ?? "";
}

function subscribeEmail(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const handler = (e: StorageEvent) => {
    if (!e.key || e.key === STORAGE_EMAIL_KEY) callback();
  };
  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

export function useAdminEmail() {
  return useSyncExternalStore(subscribeEmail, getEmailSnapshot, () => "");
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") return () => {};

  const handler = (e: StorageEvent) => {
    if (!e.key || e.key === STORAGE_KEY) callback();
  };

  window.addEventListener("storage", handler);
  return () => window.removeEventListener("storage", handler);
}

function getSnapshot() {
  return isAdminAuthed();
}

function getServerSnapshot() {
  return false;
}

export function useAdminAuthed() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function getReturnTo() {
  if (typeof window === "undefined") return "/admin";
  return `${window.location.pathname}${window.location.search}`;
}

export function useAdminGuard() {
  const router = useRouter();
  const pathname = usePathname();
  const authed = useAdminAuthed();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      try {
        const data = await me();
        if (cancelled) return;
        if (data.ok) {
          setAdminAuthed(true);
          if (data.admin?.email) setAdminEmail(String(data.admin.email));
        } else {
          setAdminAuthed(false);
        }
      } finally {
        if (!cancelled) setReady(true);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (!authed && pathname !== "/admin/login") {
      const next = encodeURIComponent(getReturnTo());
      router.replace(`/admin/login?next=${next}`);
    }
  }, [authed, pathname, ready, router]);

  return useMemo(() => ({ ready, authed }), [ready, authed]);
}

