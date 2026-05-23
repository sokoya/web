"use client";

import { useEffect, useMemo, useState } from "react";
import { getApiErrorMessage } from "../_api/client";
import { deletePressItem, listPress, PressItem } from "../_api/press";

export function useAdminPressList() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [items, setItems] = useState<PressItem[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const deleting = useMemo(() => (deletingId ? true : false), [deletingId]);

  async function load() {
    setLoading(true);
    setErr(null);
    try {
      const data = await listPress();
      setItems(data.items ?? []);
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to load press"));
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  async function remove(id: string) {
    setDeletingId(id);
    setErr(null);
    try {
      await deletePressItem(id);
      setItems((prev) => prev.filter((x) => x.id !== id));
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to delete press item"));
    } finally {
      setDeletingId(null);
    }
  }

  return { loading, err, items, deleting, deletingId, reload: load, remove };
}

