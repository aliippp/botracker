
import {PrismaClient} from "@prisma/client";
import {Genres} from "@/lib/types";
import {NextResponse} from "next/server";

const prisma = new PrismaClient();

export async function GET() {
    const genres: Genres[] = await prisma.genre.findMany()
    return NextResponse.json(genres)
}