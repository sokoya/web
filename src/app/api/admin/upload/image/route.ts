import { requireAdminOrThrow } from "@/lib/adminAuth";
import { cloudinary } from "@/lib/cloudinary";
import { error, json } from "@/lib/http";

export const runtime = "nodejs";

function uploadBuffer(buffer: Buffer, folder: string) {
  return new Promise<{ secure_url: string; public_id: string }>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "image" },
      (err, result) => {
        if (err) return reject(err);
        if (!result?.secure_url || !result.public_id) return reject(new Error("Upload failed"));
        resolve({ secure_url: result.secure_url, public_id: result.public_id });
      },
    );
    stream.end(buffer);
  });
}

export async function POST(req: Request) {
  try {
    await requireAdminOrThrow();

    const form = await req.formData();
    const file = form.get("file");
    if (!file || !(file instanceof File)) return error("Missing file", 400);
    if (!file.type.startsWith("image/")) return error("File must be an image", 400);

    const bytes = Buffer.from(await file.arrayBuffer());
    const uploaded = await uploadBuffer(bytes, "payscribe/blog");

    return json({
      ok: true,
      url: uploaded.secure_url,
      publicId: uploaded.public_id,
    });
  } catch (e) {
    return error(e instanceof Error ? e.message : "Unauthorized", 401);
  }
}

