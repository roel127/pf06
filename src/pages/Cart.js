import './Cart.css';
import $ from 'jquery';
import { useDispatch, useSelector } from 'react-redux';
import data from '../product.json';
import { useEffect, useState } from 'react';
import { removeToCart, allClear, checkedIds, unCheckedIds } from '../redux/User';

export function CartEmpty(){
  return(
    <div className="cartEmpty">
      <p>장바구니에 상품이 없습니다</p>
    </div>
  )
}

export function CartList( {cartList, setCartList} ){
  const { cartProductIds, checkProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const payPrice = cartList.reduce((acc, cur)=>{
    const eachPrice = Number(cur.price.replace(',',''));
    return acc += eachPrice * cur.count;
  }, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const chkAll = document.querySelector('input[name = allCheck]');
  const chkList = document.querySelectorAll('input[name = itemCheck]');

  // default

  // checkbox에 onChange로 event.target.value(item.id)를 반환 >> 배열에 unshift 시킴 >> removeToCart를 이용해 삭제시킴
  function checkAll(e){
    if(e.target.checked === true){
      chkList.forEach(item=>{
        item.checked = true;
      })
      // checkProductIds 삽입(중복 id 제거)
    }else{
      chkList.forEach(item=>{
        item.checked = false;
      })
      // checkProductIds 제거
    }
  }
  function checkItem(e, val){
    if(e.target.checked === true){
      if(!checkProductIds.includes(val.id)){
        dispatch(checkedIds(val.id));
      }
    }else{
      dispatch(unCheckedIds(val.id));
    }
  }

  return(
    <div className="cartList">
      <p>
        <button type='button' onClick={()=>console.log(checkProductIds)}>선택삭제</button>
        <button onClick={()=>dispatch(allClear())} type='button'>전체삭제</button>
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <input name='allCheck' type='checkbox' onChange={(e)=>checkAll(e)}/>
            </th>
            <th>이미지</th>
            <th>상품정보</th>
            <th>판매가</th>
            <th>수량</th>
            <th>합계</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {cartList.map(item=>{
              const totalPrice = Number(item.price.replace(',','')) * item.count;
            return(
              <tr key={item.id}>
                <td>
                  <input name='itemCheck' type='checkbox' onChange={(e)=>checkItem(e, item)} />
                </td>
                <td><img src={item.imgUrl} alt={item.name} /></td>
                <td>{item.name}</td>
                <td>{item.price}원</td>
                <td>{item.count}</td>
                <td>{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</td>
                <td>
                  <ul>
                    <li><button type='button'>주문하기</button></li>
                    <li><button onClick={()=>dispatch(removeToCart(item.id))} type='button'>삭제</button></li>
                  </ul>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>
        결제금액
        <span>{payPrice}원</span>
      </p>
      <p>
        <button type='button'>선택 상품 주문</button>
        <button type='button'>전체 상품 주문</button>
      </p>
    </div>
  )
}

export default function Cart(){
  const { cartProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const [cartList, setCartList] = useState([]);
  let subList = [];

  cartProductIds.forEach(item=>{
    const qoo = item.brand;
    data[qoo].stuff.forEach(val=>{
      if(item.id === val.id){
        val.count = item.count;
        val.times = item.times;
        subList.unshift(val);
      }
    })
  })
  useEffect(()=>{
    setCartList(subList);
  }, [cartProductIds])
  cartList.sort((a,b)=>a.times > b.times ? -1 : a.times < b.times ? 1 : 0);
  

  return(
    <div id='cartWrap'>
      {
        cartList.length >= 1 &&
        <CartList cartList={cartList} />
      }
      {
        cartList.length < 1 &&
        (<CartEmpty />)
      }
      
    </div>
  )
}