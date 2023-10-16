import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';
import data from '../product.json';
import { useEffect, useRef, useState } from 'react';
import { CartEmpty, CartList} from './sep/CartList';

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
  useEffect(()=>setCartList(subList), [cartProductIds]);
  cartList.sort((a,b)=>a.times > b.times ? -1 : a.times < b.times ? 1 : 0);
  
  const isCart = ()=>{
    return cartList.length >= 1 ? <CartList cartList={cartList} /> : <CartEmpty />
  }

  return(
    <div id='cartWrap'>
      {isCart()}
    </div>
  )
}