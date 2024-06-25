import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {Book} from "@/lib/types";

const prisma  = new PrismaClient();


export async function GET() {
    const books : Book[] = await prisma.book.findMany({
        include: {
            genres: true
        }
    })
    return NextResponse.json(books)
}