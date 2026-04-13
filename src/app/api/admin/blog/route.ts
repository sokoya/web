import { ObjectId } from "mongodb";
import { z } from "zod";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

const CreateSchema = z.object({
  title: z.string().min(2),
  slug: z.string().min(2),
  excerpt: z.string().optional().default(""),
  category: z.enum(["Company", "Product", "Finance", "API"]),
  status: z.enum(["draft", "published"]).default("draft"),
  contentHtml: z.string().optional().default(""),
  coverImageUrl: z.string().url().optional().nullable(),
  coverImagePublicId: z.string().optional().nullable(),
});

const ListQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(10),
});

export async function GET(req: Request) {
  try {
    await requireAdminOrThrow();
    const { searchParams } = new URL(req.url);
    const query = ListQuerySchema.parse({
      page: searchParams.get("page") ?? undefined,
      pageSize: searchParams.get("pageSize") ?? undefined,
    });

    const db = await getDb();
    const filter = {};
    const [posts, total] = await Promise.all([
      db
        .collection("posts")
        .find(filter)
        .sort({ updatedAt: -1 })
        .skip((query.page - 1) * query.pageSize)
        .limit(query.pageSize)
        .toArray(),
      db.collection("posts").countDocuments(filter),
    ]);

    return json({
      ok: true,
      page: query.page,
      pageSize: query.pageSize,
      total,
      posts: posts.map((p) => ({ ...p, id: String(p._id), _id: undefined })),
    });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid query", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

export async function POST(req: Request) {
  try {
    await requireAdminOrThrow();
    const body = await req.json();
    const input = CreateSchema.parse(body);

    const now = new Date();
    const doc = {
      ...input,
      status: input.status,
      publishedAt: input.status === "published" ? now : null,
      createdAt: now,
      updatedAt: now,
    };

    const db = await getDb();
    const existing = await db.collection("posts").findOne({ slug: input.slug });
    if (existing) return error("Slug already exists", 409);

    const res = await db.collection("posts").insertOne(doc);
    return json({ ok: true, id: String(res.insertedId) }, { status: 201 });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    const msg = e instanceof Error ? e.message : "Bad request";
    if (msg === "Unable to establish server connection.") return error(msg, 503);
    return error(msg, 400);
  }
}

