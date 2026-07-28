type ContactReason = "Support" | "Sales" | "Partnership" | "Other";

export type ContactNotificationInput = {
  fullName: string;
  email: string;
  reason: ContactReason;
  description: string;
};

const GROWTH_EMAIL = "growth@payscribe.co";
const SUPPORT_EMAIL = "support@payscribe.co";

export function getContactNotificationRecipient(reason: ContactReason) {
  return reason === "Sales" || reason === "Partnership" ? GROWTH_EMAIL : SUPPORT_EMAIL;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactNotification(input: ContactNotificationInput) {
  const apiKey = process.env.POSTMARK_SERVER_TOKEN;
  const from = process.env.POSTMARK_FROM_EMAIL;
  const recipient = getContactNotificationRecipient(input.reason);

  if (!apiKey || !from) {
    throw new Error("Missing Postmark environment variables");
  }

  const subject = `[Website contact: ${input.reason}] ${input.fullName}`;
  const htmlContent = `
    <h2>New website contact submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(input.fullName)}</p>
    <p><strong>Email:</strong> ${escapeHtml(input.email)}</p>
    <p><strong>Reason:</strong> ${escapeHtml(input.reason)}</p>
    <p><strong>Description:</strong></p>
    <p style="white-space: pre-wrap">${escapeHtml(input.description)}</p>
  `;
  const textContent = [
    "New website contact submission",
    `Name: ${input.fullName}`,
    `Email: ${input.email}`,
    `Reason: ${input.reason}`,
    "",
    input.description,
  ].join("\n");

  const response = await fetch("https://api.postmarkapp.com/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "X-Postmark-Server-Token": apiKey,
    },
    body: JSON.stringify({
      From: from,
      To: recipient,
      Subject: subject,
      HtmlBody: htmlContent,
      TextBody: textContent,
      ReplyTo: input.email,
      MessageStream: "outbound",
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Postmark email failed: ${response.status} ${body}`);
  }

  const data = (await response.json()) as { MessageID?: string };
  return { recipient, providerId: data.MessageID ?? null };
}
