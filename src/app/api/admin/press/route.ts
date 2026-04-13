import { z } from "zod";
import { ObjectId } from "mongodb";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";
import { pressData } from "@/app/press/_components/pressData";

const CreateSchema = z.object({
  title: z.string().min(2),
  date: z.string().min(2),
  readTime: z.string().min(1),
  summary: z.string().min(2),
  thumbnail: z.string().optional().default(""),
  url: z.string().min(5),
});

function normalizeUrl(url: string) {
  return url.trim();
}

export async function GET() {
  try {
    await requireAdminOrThrow();
    const db = await getDb();
    const col = db.collection("press_posts");

    // Auto-seed from static pressData if the collection is empty.
    const count = await col.countDocuments({});
    if (count === 0) {
      const now = new Date();
      const ops = pressData.map((p) => {
        const url = normalizeUrl(p.url);
        return col.updateOne(
          { url },
          {
            $setOnInsert: {
              title: p.title,
              date: p.date,
              readTime: p.readTime,
              summary: p.summary,
              thumbnail: p.thumbnail ?? "",
              url,
              createdAt: now,
              updatedAt: now,
              source: "seed",
            },
          },
          { upsert: true },
        );
      });
      await Promise.all(ops);
    }

    const items = await col.find({}).sort({ createdAt: -1, _id: -1 }).limit(500).toArray();
    return json({ ok: true, items: items.map((x) => ({ ...x, id: String(x._id), _id: undefined })) });
  } catch (e) {
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
      url: normalizeUrl(input.url),
      thumbnail: (input.thumbnail ?? "").trim(),
      createdAt: now,
      updatedAt: now,
      source: "manual",
    };

    const db = await getDb();
    const col = db.collection("press_posts");
    const existing = await col.findOne({ url: doc.url });
    if (existing) return error("This URL already exists", 409);

    const res = await col.insertOne(doc);
    return json({ ok: true, id: String(res.insertedId) }, { status: 201 });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

