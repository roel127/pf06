import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Magazine from "./pages/Magazine";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";
import LogIn from "./pages/LogIn";

export default function Main(){
  const testResult = [1, 2, 3, 4, 5];
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home foo={testResult}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product">
            <Route index element={<ProductList />} />
            <Route path=":slug" element={<Product />} />
          </Route>
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/community">
            <Route index element={<Community />} />
            <Route path=":slug" element={<CommunityDetail />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}