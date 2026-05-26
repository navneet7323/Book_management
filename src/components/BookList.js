import React from "react";

function BookList({ books, onEdit, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Genre:</strong> {book.genre}
          </p>

          <p>
            <strong>Year:</strong> {book.year}
          </p>

          <div className="buttons">
            <button onClick={() => onEdit(book)}>Edit</button>

            <button className="delete" onClick={() => onDelete(book.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;
