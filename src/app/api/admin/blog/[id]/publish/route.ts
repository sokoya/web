import { ObjectId } from "mongodb";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

export async function POST(_: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminOrThrow();
    const { id } = await ctx.params;
    const db = await getDb();
    const res = await db.collection("posts").updateOne(
      { _id: new ObjectId(id) },
      { $set: { status: "published", publishedAt: new Date(), updatedAt: new Date() } },
    );
    if (!res.matchedCount) return error("Not found", 404);
    return json({ ok: true });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

