"use client";

import axios, { AxiosError } from "axios";

export const adminApi = axios.create({
  baseURL: "",
  withCredentials: true,
  headers: {
    "content-type": "application/json",
  },
});

export function getApiErrorMessage(err: unknown, fallback = "Something went wrong") {
  if (axios.isAxiosError(err)) {
    const ax = err as AxiosError<any>;
    const data = ax.response?.data as any;
    if (data?.error && typeof data.error === "string") return data.error;
    if (ax.message) return ax.message;
    return fallback;
  }
  if (err instanceof Error) return err.message;
  return fallback;
}

