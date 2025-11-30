"use server";
import fs from "fs";
import path from "path";

const LOG_FILE = path.join(process.cwd(), "freeze_logs.json");

export async function triggerFreeze() {
  // ajoute un log
  const now = Date.now();
  const logEntry = { type: "auto", time: now };

  let logs = [];
  if (fs.existsSync(LOG_FILE)) {
    logs = JSON.parse(fs.readFileSync(LOG_FILE, "utf-8"));
  }
  logs.push(logEntry);
  fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));
}
