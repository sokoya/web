import { getDb } from "@/lib/mongodb";
import { json } from "@/lib/http";

export async function GET() {
  const db = await getDb();
  const posts = await db
    .collection("posts")
    .find({ status: "published" })
    .sort({ publishedAt: -1, updatedAt: -1, _id: -1 })
    .limit(200)
    .toArray();

  return json({
    ok: true,
    posts: posts.map((p) => ({ ...p, id: String(p._id), _id: undefined })),
  });
}

