import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { carting } from "../pages/sep/util";

export default function Item( {item} ){
  const { cartProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const brand = item.slug.split('_')[0];
  return(
    <figure>
      <Link to={item.slug}><img src={item.imgUrl} alt={item.name} /></Link>
      <figcaption>
        <dl>
          <dt><Link to={item.slug}>{item.name}</Link></dt>
          <dd>{item.base.join(', ')}</dd>
          <dd>{item.price}원</dd>
          <dd>
            <button type="button">찜하기</button>
            <button onClick={()=> carting(cartProductIds, dispatch, item, brand)} type="button">장바구니</button>
          </dd>
        </dl>
      </figcaption>
    </figure>
  )
}