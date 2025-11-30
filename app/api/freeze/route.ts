import { NextResponse } from "next/server";
import fs from "fs";

export async function POST(req: Request) {
  const body = await req.json();
  const file = "freeze_logs.json";

  let logs = [];

  if (fs.existsSync(file)) {
    logs = JSON.parse(fs.readFileSync(file, "utf8"));
  }

  logs.unshift(body);

  fs.writeFileSync(file, JSON.stringify(logs, null, 2));

  return NextResponse.json({ ok: true });
}

