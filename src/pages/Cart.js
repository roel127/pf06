import './Cart.css';

export function CartEmpty(){
  return(
    <div className="cartEmpty">
      <p>장바구니에 상품이 없습니다</p>
    </div>
  )
}

export function CartList(){
  return(
    <div className="cartList">
      <p>
        <button type='button'>선택삭제</button>
        <button type='button'>전체삭제</button>
      </p>
      <table>
        <thead>
          <tr>
            <th>
              <input type='checkbox'></input>
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
          {Array.map(item=>{
            return(
              <tr>
                <td>
                  <input type='checkbox'></input>
                </td>
                <td><img src='./images/keiko/keiko_hanae.jpeg' alt='' /></td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>count</td>
                <td>0,000,000원</td>
                <td>
                  <ul>
                    <li><button>주문하기</button></li>
                    <li><button>삭제</button></li>
                  </ul>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <p>
        결제금액
        <span>0,000,000<b>원</b></span>
      </p>
      <p>
        <button>선택 상품 주문</button>
        <button>전체 상품 주문</button>
      </p>
    </div>
  )
}

export default function Cart(){
  return(
    <div id='cartWrap'>
      <CartList />
      {/* <CartEmpty /> */}
    </div>
  )
}