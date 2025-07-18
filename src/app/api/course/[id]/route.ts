import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) return NextResponse.json({ error: "ID requis" }, { status: 400 });

  const course = await prisma.course.findUnique({
    where: { id },
    include: { author: true, category: true },
  });
  if (!course) return NextResponse.json({ error: "Cours introuvable" }, { status: 404 });
  return NextResponse.json({ course });
} 