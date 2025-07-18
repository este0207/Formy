import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const courses = await prisma.course.findMany({
    include: { author: true, category: true },
  });
  return NextResponse.json({ courses });
}

export async function POST(req: Request) {
  try {
    const { title, description, level, duration, authorId, categoryId } = await req.json();
    if (!title || !description || !authorId || !categoryId || typeof level !== 'number' || typeof duration !== 'number') {
      return NextResponse.json({ error: "Champs requis manquants ou invalides." }, { status: 400 });
    }
    const course = await prisma.course.create({
      data: { title, description, level, duration, authorId, categoryId },
      include: { author: true, category: true },
    });
    return NextResponse.json({ course });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
} 