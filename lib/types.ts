export type Categories = string[];

export type Book = {
    id: number,
    title: string,
    author: string,
    genres: Categories,
}