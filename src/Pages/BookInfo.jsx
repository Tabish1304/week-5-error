import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import Rating from "../Components/Ui/Rating";
import Price from "../Components/Ui/Price";
import Book from "..//Components/Ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);

  function addBookToCart(book) {
    addToCart(book);
  }

  function bookExsistOnCart() {
    return cart.find((book) => book.id === +id);
  }

  return (
    <div id="books-body ">
      <main id="books-main">
        <div className="books-container">
          <div className="row">
            <div className="books-selected-top">
              <Link className="book-link" to="/books">
                <FontAwesomeIcon icon={faArrowLeft} />
              </Link>
              <Link className="book-link" to="/books">
                <h2 className="book-selected-title-top">Books</h2>
              </Link>
            </div>
            <div className="book-selected">
              <figure className="book-selected-figure">
                <img src={book.url} alt="" className="book-selected-img" />
              </figure>
              <div className="book-selected-description">
                <h2 className="books-selected-title">{book.title}</h2>
                <Rating rating={book.rating} />
                <div className="book-selected-price">
                  <Price
                    originalPrice={book.originalPrice}
                    salePrice={book.salePrice}
                  />
                </div>
              </div>
              <div className="book-summary">
                <h3 className="book-summary-title">Summary</h3>
                <p className="book-summary-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  accusantium libero qui. Placeat earum unde quisquam rerum
                  ratione molestiae quaerat atque pariatur laboriosam
                  voluptatibus, harum dignissimos est ea! Commodi,
                  exercitationem.
                </p>
                <p className="book-summary-para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  accusantium libero qui. Placeat earum unde quisquam rerum
                  ratione molestiae quaerat atque pariatur laboriosam
                  voluptatibus, harum dignissimos est ea! Commodi,
                  exercitationem.
                </p>
              </div>
              {bookExsistOnCart() ? (
                <Link className="books-link" to={`/cart`}>
                  <button className="btn">Checout</button>
                </Link>
              ) : (
                <button onClick={() => addBookToCart(book)} className="btn">
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="books-container">
          <div className="row">
            <div className="book-selected-top">
              <h2 className="books-selected-title-top">Reommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
