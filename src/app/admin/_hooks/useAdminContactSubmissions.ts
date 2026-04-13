"use client";

import { useEffect, useMemo, useState } from "react";
import { getApiErrorMessage } from "../_api/client";
import { ContactSubmission, listSubmissions, SubmissionStatus, updateSubmissionStatus } from "../_api/contact";

export function useAdminContactSubmissions() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [items, setItems] = useState<ContactSubmission[]>([]);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const updating = useMemo(() => (updatingId ? true : false), [updatingId]);

  async function load() {
    setErr(null);
    setLoading(true);
    try {
      const data = await listSubmissions();
      setItems(data.submissions ?? []);
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to load submissions"));
    } finally {
      setLoading(false);
    }
  }

  async function setStatus(id: string, next: SubmissionStatus) {
    setUpdatingId(id);
    try {
      await updateSubmissionStatus(id, next);
      setItems((prev) => prev.map((x) => (x.id === id ? { ...x, status: next } : x)));
    } catch (e) {
      throw new Error(getApiErrorMessage(e, "Failed to update status"));
    } finally {
      setUpdatingId(null);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  return { loading, err, items, updating, updatingId, reload: load, setStatus, setItems };
}

