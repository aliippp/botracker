export type Genres = {
    id: string,
    name: string
}

export type Book = {
    id: string,
    title: string,
    author: string,
    genres: Genres[]
}