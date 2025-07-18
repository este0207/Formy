import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const categories = await prisma.category.findMany();
  return NextResponse.json({ categories });
}

export async function POST(req: Request) {
  try {
    const { name } = await req.json();
    if (!name) return NextResponse.json({ error: "Nom requis" }, { status: 400 });
    const existing = await prisma.category.findUnique({ where: { name } });
    if (existing) return NextResponse.json({ error: "Catégorie déjà existante" }, { status: 400 });
    const category = await prisma.category.create({ data: { name } });
    return NextResponse.json({ category });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
} 