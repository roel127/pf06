import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Magazine from "./pages/Magazine";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";

export default function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product">
            <Route index element={<ProductList />} />
            <Route path=":courseSlug" element={<Product />} />
          </Route>
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community1" element={<CommunityDetail />} />

        </Routes>
      </App>
    </BrowserRouter>
  )
}