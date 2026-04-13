import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

export async function GET() {
  try {
    await requireAdminOrThrow();
    const db = await getDb();

    const [published, drafts, newContacts, recentPosts, recentContacts] = await Promise.all([
      db.collection("posts").countDocuments({ status: "published" }),
      db.collection("posts").countDocuments({ status: "draft" }),
      db.collection("contact_submissions").countDocuments({ status: "new" }),
      db.collection("posts").find({}).sort({ updatedAt: -1 }).limit(3).toArray(),
      db.collection("contact_submissions").find({}).sort({ createdAt: -1 }).limit(3).toArray(),
    ]);

    return json({
      ok: true,
      stats: { published, drafts, newContacts },
      recentPosts: recentPosts.map((p) => ({ ...p, id: String(p._id), _id: undefined })),
      recentContacts: recentContacts.map((c) => ({ ...c, id: String(c._id), _id: undefined })),
    });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

