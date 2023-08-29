import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Product from "./components/Product";

export default function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/detail" element={<Product />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}