import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Magazine from "./pages/Magazine";
import Community from "./pages/Community";
import CommunityDetail from "./pages/CommunityDetail";
import LogIn from "./pages/LogIn";
import { useState } from "react";
import data from './product.json';

export default function Main(){
  const testResult = [1, 2, 3, 4, 5];
  const allInit = [
    ...data.keiko.stuff,
    ...data.ramon.stuff,
    ...data.nishane.stuff
  ]
  const [brand, setBrand] = useState(allInit);
  const [brandName, setBrandName] = useState('all');

  function clickBrand(val){
    if(val === 'all'){
      setBrand(allInit);
      setBrandName(val);
    } else{
      const clkBrand = data[val].stuff;
      setBrand(clkBrand);
      setBrandName(val);
    }
  }
  return(
    <Router>
      <App clickBrand={clickBrand}>
        <Routes>
          <Route path="/" element={<Home foo={testResult} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product">
            <Route index element={<ProductList data={data} brand={brand} brandName={brandName} clickBrand={clickBrand} />} />
            <Route path=":slug" element={<Product />} />
          </Route>
          <Route>
            <Route path=":slug" element={<Magazine />} />
            <Route path=":slug" element={<Magazine />} />
          </Route>
          <Route path="/community">
            <Route index element={<Community />} />
            <Route path=":slug" element={<CommunityDetail />} />
          </Route>
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </App>
    </Router>
  )
}