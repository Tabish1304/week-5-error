import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Books from "./Pages/Books";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { books } from "./data";
import BookInfo from "./Pages/BookInfo";
import Cart from "./Pages/Cart";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  // function addToCart(book) {
  //   const dupItem = cart.find((item) => +item.id === +book.id);
  //   if (dupItem) {
  //     setCart(
  //       cart.map((item) => {
  //         if (item.id === dupItem.id) {
  //           return {
  //             ...item,
  //             quantity: item.quantity + 1,
  //           };
  //         }
  //         else{
  //           return item
  //         }
  //       })
  //     );
  //   }
  //   else{
  //     setCart([...cart,{ ...book, quantity:1}])
  //   }
  // }

  function addToCart(book){
    setCart([...cart, book])
  }
  useEffect(() => {
    console.log(cart);
  },[cart]);
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route
            path="/books/:id"
            element={<BookInfo books={books} addToCart={addToCart} />}
          />
          <Route path="/cart" element={<Cart books={books} cart={cart} />} />

          {/* <Home></Home> */}
          {/* <Footer></Footer> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
