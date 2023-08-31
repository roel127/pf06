import { Link } from "react-router-dom"
import { FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

export default function Header(){
  return(
    <header>
      <div>
        <h1>
          <Link to="/"><img src="./images/logo.png" alt="ssense fragrance"/></Link>
        </h1>
        <ul>
          <li>
            <Link to="*">로그인</Link>
          </li>
          <li>
            <Link to="*">마이페이지</Link>
          </li>
          <li>
            <Link to="/Cart">장바구니</Link>
          </li>
        </ul>
      </div>
      <div>
        <nav>
          <h2 className="hide">메인네비게이션</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="Magazine">Magazine</Link>
            </li>
            <li>
              <Link to="*">Community</Link>
            </li>
          </ul>
        </nav>
        <form>
          <input type="text" />
          <button type="submit"><FiSearch /></button>
        </form>
      </div>
    </header>
  )
}