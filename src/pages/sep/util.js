import { addToCart } from "../../redux/User";

export function carting(list, dispatchFunc , product, brandFromSlug, selCount=1){
  const readyItem = {
    id: product.id,
    brand: brandFromSlug,
    count: selCount
  }
  list.filter(cartIds => cartIds.id === product.id).length >= 1 ? alert('이미 장바구니에 있습니다.') : dispatchFunc(addToCart(readyItem));
}