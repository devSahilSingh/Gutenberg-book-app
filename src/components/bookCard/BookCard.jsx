import React from "react";
import "./BookCard.css";

const BookCard = ({ book, onClick }) => {
  return (
    <div className="book-card" onClick={onClick}>
      <img
        src={book.formats["image/jpeg"]}
        alt={book.title}
        className="book-cover"
      />
      <div className="book-title">{book.title}</div>
      <div className="book-author">
        {book.authors?.[0]?.name || "Unknown Author"}
      </div>
    </div>
  );
};

export default BookCard;
