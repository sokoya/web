import { getDb } from "@/lib/mongodb";
import { json } from "@/lib/http";

export async function GET() {
  const db = await getDb();
  const items = await db.collection("press_posts").find({}).sort({ createdAt: -1, _id: -1 }).limit(500).toArray();

  return json({
    ok: true,
    items: items.map((x) => ({ ...x, id: String(x._id), _id: undefined })),
  });
}

