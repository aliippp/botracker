import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const bookData = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: [{name: "Adventure"}, {name: "Fantasy"}]
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genre: [{name: "Children's literature"}, {name: "Fantasy"}]
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre:  [{name: "Adventure"}, {name: "Fantasy"}]
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genre: [{name: "Mystery"}, {name: "Thriller"}]

    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre:  [{name: "Fiction"}]
    },
]

async function main() {
    try {
        for (const book of bookData) {
            const { genre, ...data } = book
            const createdBook = await prisma.book.create({
                data: {
                    ...data,
                    genre: {
                        create: genre
                    }
                }
            })
        }
    }
    catch {
        console.error("Error creating book data")
    }
}

main().then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})