import './Product.css';

export default function Product(){
  return(
    <div id='detail'>
      <span>
        <img src='./images/keiko/keiko_wild_berries.jpeg' alt='' />
      </span>
      <span>
        <dl>
          <dt>케이코 메쉐리 와일드 베리즈 오 드 퍼퓸 100ml</dt>
          <dd>Floral, Fruity</dd>
          <dd>220,000원</dd>
          <dd>
            <ul>
              <li><dfn>브랜드</dfn><span>Keiko</span></li>
              <li><dfn>할인</dfn><span>적용안됨</span></li>
              <li><dfn>배송비</dfn><span>무료</span></li>
            </ul>
          </dd>
        </dl>
      </span>
    </div>
  )
}