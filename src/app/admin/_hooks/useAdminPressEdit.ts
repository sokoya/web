"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getApiErrorMessage } from "../_api/client";
import { deletePressItem, getPressItem, updatePressItem } from "../_api/press";

export function useAdminPressEdit() {
  const params = useParams<{ id: string }>();
  const id = params?.id;
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [initialLoaded, setInitialLoaded] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [readTime, setReadTime] = useState("");
  const [summary, setSummary] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [url, setUrl] = useState("");

  const disabled = useMemo(() => !title.trim() || !date.trim() || !readTime.trim() || !summary.trim() || !url.trim(), [
    title,
    date,
    readTime,
    summary,
    url,
  ]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      if (!id) return;
      setLoading(true);
      setErr(null);
      try {
        const data = await getPressItem(id);
        if (cancelled) return;
        const p = data.item;
        setTitle(p.title ?? "");
        setDate(p.date ?? "");
        setReadTime(p.readTime ?? "");
        setSummary(p.summary ?? "");
        setThumbnail(p.thumbnail ?? "");
        setUrl(p.url ?? "");
        setInitialLoaded(true);
      } catch (e) {
        if (!cancelled) setErr(getApiErrorMessage(e, "Press item not found"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function onSave() {
    if (!id) return;
    setErr(null);
    setSaving(true);
    try {
      await updatePressItem(id, {
        title: title.trim(),
        date: date.trim(),
        readTime: readTime.trim(),
        summary: summary.trim(),
        thumbnail: thumbnail.trim(),
        url: url.trim(),
      });
      router.replace("/admin/press");
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to save press item"));
    } finally {
      setSaving(false);
    }
  }

  async function onDelete() {
    if (!id) return;
    setErr(null);
    setSaving(true);
    try {
      await deletePressItem(id);
      router.replace("/admin/press");
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to delete press item"));
    } finally {
      setSaving(false);
    }
  }

  return {
    id,
    loading,
    initialLoaded,
    err,
    saving,
    disabled,
    title,
    setTitle,
    date,
    setDate,
    readTime,
    setReadTime,
    summary,
    setSummary,
    thumbnail,
    setThumbnail,
    url,
    setUrl,
    onSave,
    onDelete,
  };
}

