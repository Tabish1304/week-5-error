import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Price from "./Price";

const Book = ({ book }) => {
  return (
    <div className="books">
      <div className="book">
        <Link to={`/books/${book.id}`}>
          <figure className="book-img-wrapper">
            <img src={book.url} alt="" />
          </figure>
        </Link>
        <div className="book-title">
          <Link className="book-title-link" to={`/books/${book.id}`}>
            {book.title}
          </Link>
        </div>
        <Rating rating={book.rating} />
        <Price originalPrice={book.originalPrice} salePrice={book.salePrice} />
      </div>
    </div>
  );
};

export default Book;
