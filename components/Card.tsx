import type { Book } from "@/lib/types";
import Link from "next/link";
export function Card( book  : Book) {
    return (
        <Link href={`/books/${book.id}`} className="card card-compact w-full bg-base-100 border">
            <figure>
                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.author}</p>
                <div className="card-actions justify-end">
                    {book.genres?.map((genre, index) => (
                        <div key={index} className="badge badge-outline">{genre.name}</div>
                    ))}
                </div>
            </div>
        </Link>
    );
}
