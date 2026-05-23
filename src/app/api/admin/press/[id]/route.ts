import { ObjectId } from "mongodb";
import { z } from "zod";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

const UpdateSchema = z.object({
  title: z.string().min(2).optional(),
  date: z.string().min(2).optional(),
  readTime: z.string().min(1).optional(),
  summary: z.string().min(2).optional(),
  thumbnail: z.string().optional(),
  url: z.string().min(5).optional(),
});

function normalizeUrl(url: string) {
  return url.trim();
}

export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminOrThrow();
    const { id } = await ctx.params;
    const db = await getDb();
    const item = await db.collection("press_posts").findOne({ _id: new ObjectId(id) });
    if (!item) return error("Not found", 404);
    return json({ ok: true, item: { ...item, id: String(item._id), _id: undefined } });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

export async function PATCH(req: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminOrThrow();
    const { id } = await ctx.params;
    const body = await req.json();
    const input = UpdateSchema.parse(body);

    const update: Record<string, unknown> = { ...input, updatedAt: new Date() };
    if (typeof input.url === "string") update.url = normalizeUrl(input.url);
    if (typeof input.thumbnail === "string") update.thumbnail = input.thumbnail.trim();

    const db = await getDb();
    const col = db.collection("press_posts");

    if (typeof update.url === "string") {
      const existing = await col.findOne({ url: update.url, _id: { $ne: new ObjectId(id) } });
      if (existing) return error("This URL already exists", 409);
    }

    const res = await col.updateOne({ _id: new ObjectId(id) }, { $set: update });
    if (!res.matchedCount) return error("Not found", 404);
    return json({ ok: true });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

export async function DELETE(_: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminOrThrow();
    const { id } = await ctx.params;
    const db = await getDb();
    const res = await db.collection("press_posts").deleteOne({ _id: new ObjectId(id) });
    if (!res.deletedCount) return error("Not found", 404);
    return json({ ok: true });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

