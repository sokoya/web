import { requireAdminOrThrow } from "@/lib/adminAuth";
import { cloudinary } from "@/lib/cloudinary";
import { error, json } from "@/lib/http";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    await requireAdminOrThrow();
    const body = (await req.json().catch(() => ({}))) as { publicId?: string };
    const publicId = body.publicId?.trim();
    if (!publicId) return error("Missing publicId", 400);

    const res = await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
    // Cloudinary returns { result: 'ok' | 'not found' | ... }
    return json({ ok: true, result: res.result });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

