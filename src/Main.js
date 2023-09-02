import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import Product from "./components/Product";
import Magazine from "./components/Magazine";
import Community from "./components/Community";
import CommunityDetail from "./components/CommunityDetail";

export default function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/detail" element={<Product />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community1" element={<CommunityDetail />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}