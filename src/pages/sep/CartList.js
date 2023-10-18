import { useSelector, useDispatch } from "react-redux";
import { useEffect, useRef } from "react";
import { removeToCart, allClear, checkedIds, unCheckedIds } from '../../redux/User';

export function CartEmpty(){
  return(
    <div className="cartEmpty">
      <p>장바구니에 상품이 없습니다</p>
    </div>
  )
}

export function CartList( {cartList} ){
  const { cartProductIds, checkProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const payPrice = cartList.reduce((acc, cur)=>{
    const eachPrice = Number(cur.price.replace(',',''));
    return acc += eachPrice * cur.count;
  }, 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const refInputAll = useRef();
  const refInput = useRef([]);

  useEffect(()=>{
    if(refInput.current.includes(null)){
      for(let i in refInput.current){
        if(refInput.current[i] === null){
          refInput.current.splice(i,1);
          i--;
        } 
      }
    }
  }, [cartList]);

  function checkAll(e){
    const isChecked = e.target.checked;
    if(isChecked){
      refInput.current.forEach(item=>{
        if(item !== null){item.checked = true;}
      });
      cartProductIds.forEach(item=>{
        dispatch(checkedIds(item.id));
      })
    } else{
      refInput.current.forEach(item=>{
        if(item !== null){item.checked = false;}
      })
      cartProductIds.forEach(item=>{
        dispatch(unCheckedIds(item.id));
      })
    }
  }
  function checkItem(e, val){
    const isChecked = e.target.checked;
    let itemCheck = [];

    if(isChecked){
      if(!checkProductIds.includes(val.id)){
        dispatch(checkedIds(val.id));
      }
    }else{
      dispatch(unCheckedIds(val.id));
    }
    
    // 각 input 선택 시 전체선택input 변경
    refInput.current.forEach(item=>{
      item.checked === true ? itemCheck.unshift(true) : itemCheck.unshift(false);
    })
    if(itemCheck.includes(false)){
      refInputAll.current.checked = false;
    } else{
      refInputAll.current.checked = true;
    }
  }
  function eachRemove(){
    const chkItem = cartProductIds.reduce((acc, cur)=>{
      checkProductIds.forEach(item=>{
        if(item === cur.id){
          acc = [...acc, cur];
        }
      })
      return acc;
    },[]);
    chkItem.forEach(rmItem=>{
      dispatch(removeToCart(rmItem.id));
      dispatch(unCheckedIds(rmItem.id));
    })
    console.log(refInput.current);
  }

  return(
    <div className="cartList">
      <p>
        <button type='button' onClick={()=>eachRemove()}>선택삭제</button>
        <button onClick={()=>dispatch(allClear())} type='button'>전체삭제</button>
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <input onClick={(e)=>checkAll(e)} id='allCheck' name='allCheck' type='checkbox' ref={refInputAll} />
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
          {cartList.map((item, index)=>{
              const totalPrice = Number(item.price.replace(',','')) * item.count;
            return(
              <tr key={item.id}>
                <td>
                  <input ref={(element)=>refInput.current[index] = element}
                  name='itemCheck' type='checkbox' onChange={(e)=>checkItem(e, item)} />
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