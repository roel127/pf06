import { HiMinus, HiPlus, HiGift } from 'react-icons/hi';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { carting } from './util';

export default function( {cont, str} ){
  const [countItem, setCountItem] = useState(1);
  const totalPrice = Number(cont.price.replace(',','')) * countItem;
  const { cartProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const brand = str[0];

  return(
    <div className='topInfo'>
      <dl>
        <dt>{cont.name}</dt>
        <dd>{cont.base.join(', ')}</dd>
        <dd>{cont.price}원</dd>
        <dd>
          <ul>
            <li><dfn>브랜드</dfn><span>Keiko</span></li>
            <li><dfn>할인</dfn><span>적용안됨</span></li>
            <li><dfn>배송비</dfn>{cont.delivery === true && (<span>무료</span>) || cont.delivery !== true && (<span>2,500원</span>)}</li>
          </ul>
        </dd>
      </dl>
      <table>
        <tbody>
          <tr>
            <td>{cont.name}</td>
            <td>
              <button type='button' onClick={()=>{countItem <= 1 ? setCountItem(1) : setCountItem(countItem - 1)}}><HiMinus /></button>
              <span>{countItem}</span>
              <button type='button' onClick={()=>{countItem >= 9 ? setCountItem(9) : setCountItem(countItem + 1)}}><HiPlus /></button>
            </td>
            <td>{cont.price}원</td>
          </tr>
        </tbody>
      </table>
      <p>
        <span>총 상품금액</span>
        <span>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원 <b>&#40;{countItem}개&#41;</b></span>
      </p>
      <p><button type='button'><HiGift />선물하기</button></p>
      <p>
        <button type='button'>바로 구매</button>
        <button type='button' onClick={()=>carting(cartProductIds, dispatch, cont, brand, countItem)}>장바구니</button>
      </p>
    </div>
  )
}