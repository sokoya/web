import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

// Node scripts don't automatically load Next.js `.env*` files.
// Load `.env` (and `.env.local` if present) from the repo root.
dotenv.config({ path: ".env" });
dotenv.config({ path: ".env.local", override: false });

function usage() {
	console.log("Usage:");
	console.log(
		"  npm run create-admin -- <email> <password> <X_AUTH_ADMIN_KEY>",
	);
	console.log("");
	console.log("Example:");
	console.log(
		"  npm run create-admin -- admin@payscribe.ng 'Password123!' 'your-admin-key'",
	);
}

const [, , email, password, providedKey] = process.argv;

if (!email || !password || !providedKey) {
	usage();
	process.exit(1);
}

function isAllowedAdminEmail(value) {
	const v = String(value || "").trim().toLowerCase();
	return v.endsWith("@payscribe.ng") || v.endsWith("@payscribe.co");
}

if (!isAllowedAdminEmail(email)) {
	console.error("Unauthorized email domain. Use @payscribe.ng or @payscribe.co");
	process.exit(1);
}

const expectedKey = process.env.X_AUTH_ADMIN_KEY;
if (!expectedKey) {
	console.error("Missing X_AUTH_ADMIN_KEY in env.");
	process.exit(1);
}

if (providedKey !== expectedKey) {
	console.error("X_AUTH_ADMIN_KEY does not match env value.");
	process.exit(1);
}

const uri = process.env.MONGO_URI;
if (!uri) {
	console.error("Missing MONGO_URI in env.");
	process.exit(1);
}

const saltRounds = 12;
const passwordHash = await bcrypt.hash(password, saltRounds);

const client = new MongoClient(uri);
await client.connect();
const db = client.db(process.env.MONGO_DB_NAME || "payscribe");
const admins = db.collection("admins");

const now = new Date();
const res = await admins.updateOne(
	{ email: email.toLowerCase() },
	{
		$set: {
			email: email.toLowerCase(),
			passwordHash,
			updatedAt: now,
			role: "admin",
		},
		$setOnInsert: {
			createdAt: now,
		},
	},
	{ upsert: true },
);

await client.close();

console.log(res.upsertedId ? "Admin created." : "Admin updated.");
console.log("Email:", email.toLowerCase());
