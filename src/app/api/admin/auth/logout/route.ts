import { NextResponse } from "next/server";
import { clearAdminAuthCookie } from "@/lib/adminAuth";
import { json } from "@/lib/http";

export async function POST() {
  const res = json({ ok: true });
  clearAdminAuthCookie(res);
  return res;
}

