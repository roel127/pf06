import { Link } from "react-router-dom";

export default function Item( {item} ){
  return(
    <figure>
      <Link to={item.slug}><img src={item.imgUrl} alt="" /></Link>
      <figcaption>
        <dl>
          <dt><Link to={item.slug}>{item.name}</Link></dt>
          <dd>{item.base.join(', ')}</dd>
          <dd>{item.price}원</dd>
          <dd>
            <button type="button">구매하기</button>
            <button type="button">장바구니</button>
          </dd>
        </dl>
      </figcaption>
    </figure>
  )
}