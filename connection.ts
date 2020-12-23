import { MongoClient } from "https://deno.land/x/mongo@v0.20.1/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const client = new MongoClient();
await client.connect(config().HOST);

export const db = client.database(config().DB);
export const users = db.collection<User>(config().USERS);
export const movies = db.collection<string[]>(config().MOVIES);

interface User {
  _id: { $oid: string };
  username: string;
  email: string;
  password: string;
}
