"use client"
import {LuArrowLeft} from "react-icons/lu";
import {useRouter} from "next/navigation";

export default function Page({params} : {params: {id: string}}) {
    const router = useRouter()
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
                            <p>Book Title</p>
                        </div>
                        <div className="my-2">
                            <p className="my-2">Author: </p>
                            <p>Book Author</p>
                        </div>
                        <div className="my-2">
                            <p>Genres: </p>
                            <div className="my-2 grid grid-cols-8 gap-1">
                                <div className="badge badge-outline">Genre 1</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
                                <div className="badge badge-outline">Genre 2</div>
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