// Lightweight health endpoint for BetterStack / UptimeRobot. Returns 200 + tiny payload.
import { NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 0;

export async function GET() {
  return NextResponse.json({
    status: "ok",
    site: "kiddoklub",
    ts: new Date().toISOString(),
    region: process.env.VERCEL_REGION ?? "local",
    commit: process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 7) ?? null,
  });
}
