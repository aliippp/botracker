import { LuSearch } from "react-icons/lu";
import Image from "next/image";
import { Card } from "@/components/Card";

import type {Book, Categories} from "@/lib/types";

import {getBooks} from "@/lib/actions/getBooks";

const categories: Categories = ["Non Fiction", "Fiction", "Science"];

export default async function Books() {
    const books = await getBooks()
    return (
        <main className="flex container mx-auto h-screen">
            <div className="flex-1 flex flex-col overflow-visible">
                <h1 className="my-4 font-regular text-xl">Books</h1>
                <div className="my-4">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <LuSearch />
                    </label>
                </div>
                <div className="w-full flex justify-end my-4">
                    <select className="select select-bordered w-full max-w-xs">
                        {categories.map((category, index) => (
                            <option key={index} defaultValue={categories[0]}>{category}</option>
                        ))}
                    </select>
                </div>
                <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 py-4">
                    {
                        books.map((book: Book) => (
                            <Card key={book.id} {...book} />
                        ))
                    }
                </div>
            </div>
            <div className="divider divider-horizontal hidden lg:flex"></div>
            <div className="w-96 p-4 hidden lg:block">
                <div className="flex flex-col justify-between h-full">
                    <h2 className="my-4 font-regular text-xl">Book Details</h2>
                    <Image src="/books.svg" width={300} height={300} alt="Books" className=""/>
                    <button className="btn btn-block btn-primary text-white">Add Books</button>
                </div>
            </div>
        </main>
    );
}
