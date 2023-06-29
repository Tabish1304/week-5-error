import React from "react";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Book from "./Ui/Book";
import { books } from "..//data";

const Featured = () => {
  // console.log(books);

  return (
    <section id="features">
      <div className="container">
        <div className="row">
          <h2 className="section-title">
            Featured <span className="purple">Books</span>
          </h2>
          <div className="books">
            {books
              .filter((book) => book.rating === 5)
              .slice(0, 4)
              .map((book) => (
                <Book book={book} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
