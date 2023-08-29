import { BsTrash } from 'react-icons/bs';
import './Cart.css';

export default function Cart(){
  return(
    <div id='cartWrap'>
      {/* <p>
        <button type="button">장바구니 비우기</button>
      </p>
      <div className="cartList">
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>케이코 메쉐리 와일드 베리즈 오 드 퍼퓸 100ml</dt>
              <dd>base</dd>
              <dd>220,000원</dd>
              <dd>
                <button type="button">구매하기</button>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
      </div> */}
      <div className="cartEmpty">
        <p>장바구니에 상품이 없습니다</p>
      </div>
    </div>
  )
}