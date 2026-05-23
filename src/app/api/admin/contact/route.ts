import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

export async function GET() {
  try {
    await requireAdminOrThrow();
    const db = await getDb();
    const submissions = await db
      .collection("contact_submissions")
      .find({})
      .sort({ createdAt: -1 })
      .limit(500)
      .toArray();

    return json({
      ok: true,
      submissions: submissions.map((s) => ({ ...s, id: String(s._id), _id: undefined })),
    });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

