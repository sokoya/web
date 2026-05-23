"use client";

import { useEffect, useMemo, useState } from "react";
import { getApiErrorMessage } from "../_api/client";
import { BlogPostRow, BlogStatus, deletePost, listBlog, publishPost, unpublishPost } from "../_api/blog";

export function useAdminBlogList() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPostRow[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const rows = useMemo(() => posts, [posts]);
  const pageSize = 10;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const updating = useMemo(() => (updatingId ? true : false), [updatingId]);

  useEffect(() => {
    let cancelled = false;
    async function run() {
      setLoading(true);
      setErr(null);
      try {
        const data = await listBlog({ page, pageSize });
        if (!cancelled) {
          setPosts(data.posts ?? []);
          setTotal(data.total ?? 0);
        }
      } catch (e) {
        if (!cancelled) setErr(getApiErrorMessage(e, "Failed to load posts"));
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    void run();
    return () => {
      cancelled = true;
    };
  }, [page]);

  async function updateStatus(id: string, status: BlogStatus) {
    setUpdatingId(id);
    setErr(null);
    try {
      if (status === "published") await publishPost(id);
      else await unpublishPost(id);
      setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, status, updatedAt: new Date().toISOString() } : p)));
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to update post"));
    } finally {
      setUpdatingId(null);
    }
  }

  async function removePost(id: string) {
    setUpdatingId(id);
    setErr(null);
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
      setTotal((t) => Math.max(0, t - 1));
    } catch (e) {
      setErr(getApiErrorMessage(e, "Failed to delete post"));
    } finally {
      setUpdatingId(null);
    }
  }

  return {
    loading,
    err,
    rows,
    total,
    page,
    setPage,
    pageSize,
    totalPages,
    updating,
    updatingId,
    updateStatus,
    removePost,
  };
}

