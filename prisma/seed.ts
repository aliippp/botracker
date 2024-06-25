import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const bookData = [
    {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genres: [{name: "Adventure"}, {name: "Fantasy"}]
    },
    {
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        genres: [{name: "Children's literature"}, {name: "Fantasy"}]
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genres:  [{name: "Adventure"}, {name: "Fantasy"}]
    },
    {
        title: "The Da Vinci Code",
        author: "Dan Brown",
        genres: [{name: "Mystery"}, {name: "Thriller"}]

    },
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genres:  [{name: "Fiction"}]
    },
]

async function main() {
    try {
        for (const book of bookData) {
            const { genres, ...data } = book
            const createdBook = await prisma.book.create({
                data: {
                    ...data,
                    genres: {
                        create: genres
                    }
                }
            })
        }
    }
    catch {
        console.error("Error creating books data")
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