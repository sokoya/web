import { ObjectId } from "mongodb";
import { z } from "zod";
import { requireAdminOrThrow } from "@/lib/adminAuth";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

const UpdateSchema = z.object({
  status: z.enum(["new", "in_progress", "resolved"]).optional(),
  note: z.string().max(5000).optional(),
});

export async function GET(_: Request, ctx: { params: Promise<{ id: string }> }) {
  try {
    await requireAdminOrThrow();
    const { id } = await ctx.params;
    const db = await getDb();
    const submission = await db.collection("contact_submissions").findOne({ _id: new ObjectId(id) });
    if (!submission) return error("Not found", 404);
    return json({ ok: true, submission: { ...submission, id: String(submission._id), _id: undefined } });
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
    const res = await db.collection("contact_submissions").updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...input, updatedAt: new Date() } },
    );
    if (!res.matchedCount) return error("Not found", 404);
    return json({ ok: true });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

