interface BookDetailsProps {
    title: string;
    author: string;
}

export function BookDetails(book: BookDetailsProps) {
    return (
        <div className="card card-side bg-base-100 border">
            <div className="card-body">
                <h2 className="card-title">{book.title}</h2>
                <p>{book.author}</p>
            </div>
        </div>
    );
}