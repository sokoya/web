import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { NextResponse } from "next/server";

const COOKIE_NAME = "ps_admin_token";

function getJwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("Missing JWT_SECRET env var");
  return new TextEncoder().encode(secret);
}

export type AdminJwtPayload = {
  sub: string;
  role: "admin";
};

export async function signAdminToken(payload: AdminJwtPayload) {
  const secret = getJwtSecret();
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyAdminToken(token: string) {
  const secret = getJwtSecret();
  const { payload } = await jwtVerify(token, secret);
  return payload as unknown as AdminJwtPayload & { exp?: number; iat?: number };
}

export async function requireAdminOrThrow() {
  const token = (await cookies()).get(COOKIE_NAME)?.value;
  if (!token) throw new Error("Unauthorized");
  const payload = await verifyAdminToken(token);
  if (payload.role !== "admin") throw new Error("Unauthorized");
  return payload;
}

export function setAdminAuthCookie(res: NextResponse, token: string) {
  res.cookies.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function clearAdminAuthCookie(res: NextResponse) {
  res.cookies.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}

export function assertAdminKey(provided?: string | null) {
  const expected = process.env.X_AUTH_ADMIN_KEY;
  if (!expected) throw new Error("Missing X_AUTH_ADMIN_KEY env var");
  if (!provided || provided !== expected) throw new Error("Unauthorized");
}

