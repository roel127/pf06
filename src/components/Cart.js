import { BsTrash } from 'react-icons/bs';
import './Cart.css';

export default function Cart(){
  return(
    <div id='cartWrap'>
      <p>
        <button type="button">비우기</button>
      </p>
      <div className="cartList">
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>name</dt>
              <dd>base</dd>
              <dd>price</dd>
              <dd>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>name</dt>
              <dd>base</dd>
              <dd>price</dd>
              <dd>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>name</dt>
              <dd>base</dd>
              <dd>price</dd>
              <dd>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>name</dt>
              <dd>base</dd>
              <dd>price</dd>
              <dd>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>name</dt>
              <dd>base</dd>
              <dd>price</dd>
              <dd>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <img src="./images/keiko/keiko_mogador.jpeg" alt="" />
          <figcaption>
            <dl>
              <dt>name</dt>
              <dd>base</dd>
              <dd>price</dd>
              <dd>
                <button type="button"><BsTrash /></button>
              </dd>
            </dl>
          </figcaption>
        </figure>
      </div>
      <div className="cartEmpty">
        <p>장바구니에 상품이 없습니다</p>
      </div>
    </div>
  )
}