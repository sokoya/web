import dotenv from "dotenv";
import { MongoClient } from "mongodb";

// Load `.env` (and `.env.local` if present) from the repo root.
dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.local", override: false });

const uri = process.env.MONGO_URI;
if (!uri) {
  console.error("Missing MONGO_URI in env.");
  process.exit(1);
}

const dbName = process.env.MONGO_DB_NAME || "payscribe";

const startedAt = Date.now();
const client = new MongoClient(uri, { serverSelectionTimeoutMS: 8000 });

try {
  await client.connect();
  const db = client.db(dbName);
  const res = await db.command({ ping: 1 });
  const ms = Date.now() - startedAt;
  console.log("✅ MongoDB connection OK");
  console.log("DB:", dbName);
  console.log("Ping:", res?.ok === 1 ? "ok" : res);
  console.log("Time:", `${ms}ms`);
  process.exit(0);
} catch (e) {
  const ms = Date.now() - startedAt;
  console.error("❌ MongoDB connection FAILED");
  console.error("DB:", dbName);
  console.error("Time:", `${ms}ms`);
  console.error(e instanceof Error ? e.message : e);
  process.exit(1);
} finally {
  await client.close().catch(() => {});
}

