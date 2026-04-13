"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { getApiErrorMessage } from "../_api/client";
import { createPressItem } from "../_api/press";

export function useAdminPressCreate() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const onCreate = useMemo(
    () =>
      async (input: {
        title: string;
        date: string;
        readTime: string;
        summary: string;
        thumbnail: string;
        url: string;
      }) => {
        setErr(null);
        setSaving(true);
        try {
          await createPressItem({
            title: input.title.trim(),
            date: input.date.trim(),
            readTime: input.readTime.trim(),
            summary: input.summary.trim(),
            thumbnail: input.thumbnail.trim(),
            url: input.url.trim(),
          });
          router.replace("/admin/press");
        } catch (e) {
          setErr(getApiErrorMessage(e, "Failed to create press item"));
        } finally {
          setSaving(false);
        }
      },
    [router],
  );

  return { saving, err, onCreate, setErr };
}

