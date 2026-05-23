import { ObjectId } from "mongodb";
import { z } from "zod";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";
import { cloudinary } from "@/lib/cloudinary";

const UpdateSchema = z.object({
  title: z.string().min(2).optional(),
  slug: z.string().min(2).optional(),
  excerpt: z.string().optional(),
  category: z.enum(["Company", "Product", "Finance", "API"]).optional(),
  status: z.enum(["draft", "published"]).optional(),
  contentHtml: z.string().optional(),
  coverImageUrl: z.string().url().optional().nullable(),
  coverImagePublicId: z.string().optional().nullable(),
});

export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminOrThrow();
    const { id } = await ctx.params;
    const db = await getDb();
    const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    if (!post) return error("Not found", 404);
    return json({ ok: true, post: { ...post, id: String(post._id), _id: undefined } });
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

    const db = await getDb();

    if (input.slug) {
      const existing = await db.collection("posts").findOne({ slug: input.slug, _id: { $ne: new ObjectId(id) } });
      if (existing) return error("Slug already exists", 409);
    }

    const update: Record<string, unknown> = { ...input, updatedAt: new Date() };
    if (input.status === "published") update.publishedAt = new Date();
    if (input.status === "draft") update.publishedAt = null;

    const res = await db.collection("posts").updateOne({ _id: new ObjectId(id) }, { $set: update });
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
    const post = await db.collection("posts").findOne({ _id: new ObjectId(id) });
    if (!post) return error("Not found", 404);

    const publicId = (post as any).coverImagePublicId as string | undefined;
    if (publicId) {
      // Best-effort delete in Cloudinary; ignore not found.
      try {
        await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
      } catch {
        // ignore
      }
    }

    const res = await db.collection("posts").deleteOne({ _id: new ObjectId(id) });
    if (!res.deletedCount) return error("Not found", 404);
    return json({ ok: true });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

