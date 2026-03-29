import { drizzle } from "drizzle-orm/libsql";
// لاحظي إضافة {} هنا مرة أخرى ولكن مع التأكد من ملف config.ts لاحقاً
import config from "../config.js";
import * as schema from "./schema.js";

let conn: any = undefined;

// استخدام الاختيار الآمن (Optional Chaining) أو التأكيد لـ TS
if (config && (config as any).db && (config as any).db.url) {
  conn = drizzle({
    connection: {
      url: (config as any).db.url,
    },
    schema: schema,
  });
  console.log("Connected to database!");
} else {
  console.log("DATABASE_URL environment variable is not set");
  console.log("Running without CRUD endpoints");
}

export const db = conn;

export function assertDbConnection() {
  if (!db) {
    throw new Error("Database connection is not available");
  }
}