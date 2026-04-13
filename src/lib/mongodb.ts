import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("Missing MONGO_URI env var");
}

declare global {
  // eslint-disable-next-line no-var
  var __ps_mongo_client: MongoClient | undefined;
  // eslint-disable-next-line no-var
  var __ps_mongo_client_promise: Promise<MongoClient> | undefined;
}

function createClient() {
  // `uri` is guaranteed by the runtime check above; keep TS happy.
  return new MongoClient(uri as string);
}

export async function getMongoClient(): Promise<MongoClient> {
  if (process.env.NODE_ENV === "development") {
    if (!global.__ps_mongo_client_promise) {
      global.__ps_mongo_client = createClient();
      global.__ps_mongo_client_promise = global.__ps_mongo_client.connect().catch((e) => {
        // Normalize common DNS/connection failures to a friendly error.
        const msg = e instanceof Error ? e.message : String(e);
        if (/querySrv\s+ESERVFAIL/i.test(msg) || /_mongodb\._tcp\./i.test(msg)) {
          throw new Error("Unable to establish server connection.");
        }
        if (/ECONNREFUSED|ETIMEDOUT|ENOTFOUND|EAI_AGAIN/i.test(msg)) {
          throw new Error("Unable to establish server connection.");
        }
        throw e;
      });
    }
    return global.__ps_mongo_client_promise;
  }

  const client = createClient();
  return client.connect().catch((e) => {
    const msg = e instanceof Error ? e.message : String(e);
    if (/querySrv\s+ESERVFAIL/i.test(msg) || /_mongodb\._tcp\./i.test(msg)) {
      throw new Error("Unable to establish server connection.");
    }
    if (/ECONNREFUSED|ETIMEDOUT|ENOTFOUND|EAI_AGAIN/i.test(msg)) {
      throw new Error("Unable to establish server connection.");
    }
    throw e;
  });
}

export async function getDb(dbName = "payscribe") {
  const client = await getMongoClient();
  return client.db(dbName);
}

