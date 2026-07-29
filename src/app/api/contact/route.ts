import { z } from "zod";
import { getDb } from "@/lib/mongodb";
import { error, json } from "@/lib/http";
import { getContactNotificationRecipient, sendContactNotification } from "@/lib/contactNotification";

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
    const notificationRecipient = getContactNotificationRecipient(input.reason);
    const res = await db.collection("contact_submissions").insertOne({
      ...input,
      status: "new",
      notification: {
        recipient: notificationRecipient,
        status: "pending",
      },
      createdAt: now,
      updatedAt: now,
    });

    try {
      const notification = await sendContactNotification(input);
      await db.collection("contact_submissions").updateOne(
        { _id: res.insertedId },
        {
          $set: {
            notification: {
              recipient: notification.recipient,
              status: "sent",
              providerId: notification.providerId,
              sentAt: new Date(),
            },
          },
        },
      );
    } catch (notificationError) {
      console.error("Failed to send contact notification", notificationError);
      await db.collection("contact_submissions").updateOne(
        { _id: res.insertedId },
        {
          $set: {
            notification: {
              recipient: notificationRecipient,
              status: "failed",
              error: notificationError instanceof Error ? notificationError.message : "Unknown notification error",
              failedAt: new Date(),
            },
          },
        },
      );
    }

    return json({ ok: true, id: String(res.insertedId) }, { status: 201 });
  } catch (e) {
    if (e instanceof z.ZodError) return error("Invalid payload", 400, e.flatten());
    return error(e instanceof Error ? e.message : "Bad request", 400);
  }
}
