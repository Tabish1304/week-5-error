import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <div id="books-body">
        <main id="books-main">
          <div className="books-container">
            <div className="row">
              <div className="book-selected-top">
                <h2 className="cart-title">Cart</h2>
              </div>
              <div className="cart">
                <div className="cart-header">
                  <span className="cart-book">Book</span>
                  <span className="cart-quantity">Quantity</span>
                  <span className="cart-total">Price</span>
                </div>
                <div className="cart-body">
                  {
                    cart.map(book =>{
                      return (
                        <div className="cart-item">
                        <div className="cart-book">
                          <img
                            className="cart-book-img"
                            src= {book.url}
                          />
                          <div className="cart-book-info">
                            <span className="cart-book-title">
                              {book.title}
                            </span>
                            <span className="cart-book-price">£{(book.salePrice || book.originalPrice).toFixed(2)}</span>
                            <button className="cart-book-remove">Remove</button>
                          </div>
                        </div>
                        <div className="cart-quantity">
                          <input
                            type="number"
                            min={0}
                            max={99}
                            className="cart-input"
                          />
                        </div>
                        <div className="cart-total">£10.00</div>
                      </div>
                      )
                    })
                  }
                
                </div>
              </div>
              <div className="total">
                <div className="total-item total-sub-total">
                     <span>Subtotal</span>
                     <span>£10.00</span>
                </div>
                <div className="total-item total-tax">
                     <span>Tax</span>
                     <span>£1.00</span>
                </div>
                <div className="total-item total-price">
                     <span>Total</span>
                     <span>£11.00</span>
                </div>
                <button className="btn btn-checkout no-cursor">
                    Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
