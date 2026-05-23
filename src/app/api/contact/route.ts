import { z } from "zod";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";

const ContactSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  reason: z.enum(["Support", "Sales", "Partnership", "Other"]),
  description: z.string().min(2),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const input = ContactSchema.parse(body);

    const db = await getDb();
    const now = new Date();
    const res = await db.collection("contact_submissions").insertOne({
      ...input,
      status: "new",
      createdAt: now,
      updatedAt: now,
    });

    return json({ ok: true, id: String(res.insertedId) }, { status: 201 });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}

