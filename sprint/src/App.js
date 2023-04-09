import "./styles.css";
import Home from "./pages/Home/Home";
import Category from "./pages/Content/Content";

import WishList from "./pages/WishList";
import Cart from "./pages/Cart/Cart";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/"> Home </Link> ||
        <Link to="/category"> Category </Link> ||
        <Link to="/cart">Cart </Link> ||
        <Link to="/wishlist">WishList </Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
