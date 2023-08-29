import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './components/App';
import Home from "./components/Home";
import Cart from "./components/Cart";

export default function Main(){
  return(
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </App>
    </BrowserRouter>
  )
}