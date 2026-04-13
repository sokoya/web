import { requireAdminOrThrow } from "@/lib/adminAuth";
import { error, json } from "@/lib/http";

export async function GET() {
  try {
    const payload = await requireAdminOrThrow();
    return json({ ok: true, user: { sub: payload.sub, role: payload.role } });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

