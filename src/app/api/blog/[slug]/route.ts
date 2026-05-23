import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

export async function GET(_: Request, ctx: { params: Promise<{ slug: string }> }) {
  const { slug } = await ctx.params;
  const db = await getDb();
  const post = await db.collection("posts").findOne({ slug, status: "published" });
  if (!post) return error("Not found", 404);
  return json({ ok: true, post: { ...post, id: String(post._id), _id: undefined } });
}

