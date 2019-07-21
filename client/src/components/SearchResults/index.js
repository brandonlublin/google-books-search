import React from "react";
import BookCard from "../BookCard";

function SearchResults(props) {
    return (
        <div>
            <div className="container bg-light py-3">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Results</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        {props.books.map(book => (
                            <BookCard key={book.id} title={book.volumeInfo.title} author={book.volumeInfo.authors} link={book.volumeInfo.previewLink} img={book.volumeInfo.imageLinks.thumbnail} description={book.volumeInfo.description} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResults;
