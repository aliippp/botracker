import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {Book} from "@/lib/types";

type Params = {
    id: string
}

const prisma  = new PrismaClient();


export async function GET(request: Request, context: { params: Params }) {
    const books  = await prisma.book.findUnique({
        where: {
            id: context.params.id
        },
        include: {
            genres: true
        }
    })
    return NextResponse.json(books)
}