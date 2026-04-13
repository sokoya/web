"use client";

import { useEffect, useState } from "react";
import { getApiErrorMessage } from "../_api/client";
import { getDashboard } from "../_api/dashboard";

export function useAdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [published, setPublished] = useState(0);
  const [drafts, setDrafts] = useState(0);
  const [newContacts, setNewContacts] = useState(0);
  const [recentPosts, setRecentPosts] = useState<any[]>([]);
  const [recentContacts, setRecentContacts] = useState<any[]>([]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setErr(null);
      try {
        const data = await getDashboard();
        if (cancelled) return;
        setPublished(data.stats?.published ?? 0);
        setDrafts(data.stats?.drafts ?? 0);
        setNewContacts(data.stats?.newContacts ?? 0);
        setRecentPosts((data.recentPosts ?? []).slice(0, 3));
        setRecentContacts((data.recentContacts ?? []).slice(0, 3));
      } catch (e) {
        if (!cancelled) setErr(getApiErrorMessage(e, "Failed to load dashboard"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  return { loading, err, published, drafts, newContacts, recentPosts, recentContacts };
}

