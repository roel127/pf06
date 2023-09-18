import { Link } from "react-router-dom";

import { addToCart } from "../redux/User";
import { useDispatch, useSelector } from "react-redux";

export default function Item( {item} ){
  const { cartProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
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
            <button onClick={ ()=> cartProductIds.filter(val=>val.id == item.id).length >= 1 ? alert('이미 장바구니에 있습니다.') : dispatch(addToCart({id:item.id, brand:item.slug.split('_')[0], count:1})) } type="button">장바구니</button>
          </dd>
        </dl>
      </figcaption>
    </figure>
  )
}