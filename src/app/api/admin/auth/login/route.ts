import { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { assertAdminKey, setAdminAuthCookie, signAdminToken } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

const LoginSchema = z.object({
  adminKey: z.string().optional(),
  email: z.string().email().optional(),
  password: z.string().min(1).optional(),
});

function isAllowedAdminEmail(value: string) {
  const v = value.trim().toLowerCase();
  return v.endsWith("@payscribe.ng") || v.endsWith("@payscribe.co");
}

export async function POST(req: NextRequest) {
  try {
    const raw = await req.json().catch(() => ({}));
    const body = LoginSchema.parse(raw);

    // Option A: bootstrap login with master admin key
    const headerKey = req.headers.get("x-auth-admin-key");
    const providedKey = body.adminKey ?? headerKey;
    if (providedKey) {
      assertAdminKey(providedKey);
      const token = await signAdminToken({ sub: "admin", role: "admin" });
      const res = json({ ok: true });
      setAdminAuthCookie(res, token);
      return res;
    }

    // Option B: email/password login
    if (!body.email || !body.password) return error("Missing email/password", 400);
    if (!isAllowedAdminEmail(body.email)) return error("Unauthorized email domain", 403);
    const db = await getDb();
    const admin = await db.collection("admins").findOne({ email: body.email.toLowerCase() });
    if (!admin?.passwordHash) return error("Invalid credentials", 401);
    const ok = await bcrypt.compare(body.password, String(admin.passwordHash));
    if (!ok) return error("Invalid credentials", 401);

    const token = await signAdminToken({ sub: String(admin._id), role: "admin" });
    const res = json({ ok: true });
    setAdminAuthCookie(res, token);
    return res;
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

