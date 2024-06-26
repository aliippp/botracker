"use client"
import {LuArrowLeft} from "react-icons/lu";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

import {Genres} from "@/lib/types";

type Book = {
    id: string,
    title: string,
    author: string,
    genres: Genres[]
}

export default function Page({params} : {params: {id: string}}) {
    const router = useRouter()
    const [book, setBook] = useState<Book>()
    useEffect(() => {
        fetch('http://localhost:3000/api/books/' + params.id)
            .then(response => response.json())
            .then(data => setBook(data))
    }, [params.id]);

    return (
        <div className="container mx-auto">
            <div className="mt-5">
                <button onClick={()=>router.back()}>
                    <LuArrowLeft size={24} />
                </button>
            </div>
        <div className="hero min-h-screen">
            <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                    alt="Shoes"
                    className="max-w-xl rounded-lg"
                />
                <div className="w-full">
                    <h1 className="text-3xl font-bold">Book Details</h1>
                    <div className="py-4">
                        <div className="my-2">
                            <p className="my-1">Title: </p>
                            <p>{book?.title}</p>
                        </div>
                        <div className="my-2">
                            <p className="my-2">Author: </p>
                            <p>{book?.author}</p>
                        </div>
                        <div className="my-2">
                            <p>Genres: </p>
                            <div className="my-2 grid grid-cols-8 gap-1">
                                {book?.genres?.map((genre, index) => (
                                    <div key={index} className="badge badge-outline">{genre.name}</div>
                                ))}
                            </div>
                        </div>
                        <div className="my-4 grid grid-cols-2 gap-2">
                            <button className="btn btn-info w-full">Edit</button>
                            <button className="btn btn-error w-full">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}