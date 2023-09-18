import './ProductList.css';
import $ from 'jquery';
import data from '../product.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/User';
import Item from '../components/Item';

// export function BrandForm( {brand, brandEx} ){
//   const { cartProductIds } = useSelector(state=>state.cart);
//   const dispatch = useDispatch();
//   console.log(cartProductIds);

//   return(
//     <>
//     {
//       brandEx.length === 0 ? (<></>) : brandEx.map((item, index)=>{return(<p key={index}>{item}</p>)})
//     }
//     <div className="productList">
//       <span>전체 <b>{brand.length}</b>개의 제품이 있습니다.</span>
//       {brand.map(item=>{
//         const str = item.slug.split('_')[0];
//         return(
//           <figure key={item.id}>
//             <Link to={`/product/${item.slug}`}><img src={item.imgUrl} alt="" /></Link>
//             <figcaption>
//               <dl>
//                 <dt><Link to={`/product/${item.slug}`}>{item.name}</Link></dt>
//                 <dd>{item.base}</dd>
//                 <dd>{item.price}</dd>
//                 <dd>
//                   <button type="button">구매하기</button>
//                   <button type="button" onClick={()=>dispatch(addToCart({id:item.id, brand: str, count:1}))}>장바구니</button>
//                 </dd>
//               </dl>
//             </figcaption>
//           </figure>
//         )
//       })}

//     </div>
//     </>

//   )
// }

export default function ProductList(){
  const allInit = [
    ...data.keiko.stuff,
    ...data.ramon.stuff,
    ...data.nishane.stuff
  ]

  const [brand, setBrand] = useState(allInit);
  const [brandEx, setBrandEx] = useState([]);

  function changeBrand(e){
    const val = e.target.value;
    e.target.value === 'all' ? setBrand(allInit) : setBrand(data[val].stuff);
    e.target.value === 'all' ? setBrandEx([]) : setBrandEx(data[val].explain);

    $('#productWrap>p>button').on('click', function(){
      $('button>span[class = "clickedBtn').removeClass('clickedBtn');
      $(this).children('span').addClass('clickedBtn');
    })
  }

  const { cartProductIds } = useSelector(state=>state.cart);
  const dispatch = useDispatch();

  return(
    <div id="productWrap">
      <p>
          <button type="button" value='all' onClick={(e)=>changeBrand(e)}>전체보기<span className='clickedBtn'></span></button>
          <button type="button" value='keiko' onClick={(e)=>changeBrand(e)}>Keiko<span></span></button>
          <button type="button" value='ramon' onClick={(e)=>changeBrand(e)}>Ramon<span></span></button>
          <button type="button" value='nishane' onClick={(e)=>changeBrand(e)}>Nishane<span></span></button>
      </p>
      {/* <BrandForm brand={brand} brandEx={brandEx} /> */}
      {
        brandEx.length === 0 ? (<></>) : brandEx.map((item, index)=>{return(<p key={index}>{item}</p>)})
      }
      <div className="productList">
        <span>전체 <b>{brand.length}</b>개의 제품이 있습니다.</span>
        {brand.map(item=>{
          return(<Item key={item.id} item={item}/>)
        })}
        
      </div>
    </div>
  )
}