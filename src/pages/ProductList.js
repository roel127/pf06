import './ProductList.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import data from '../product.json';
import { useState } from 'react';

export function BrandForm( {brand, brandEx} ){
  return(
    <>
    {
      brandEx.length === 0 ? (<></>) : brandEx.map((item, index)=>{return(<p key={index}>{item}</p>)})
    }
    <div className="productList">
      <span>전체 <b>{brand.length}</b>개의 제품이 있습니다.</span>
      {brand.map(item=>{
        return(
          <figure key={item.id}>
            <Link to={`/product/${item.slug}`}><img src={item.imgUrl} alt="" /></Link>
            <figcaption>
              <dl>
                <dt><Link to={`/product/${item.slug}`}>{item.name}</Link></dt>
                <dd>{item.base}</dd>
                <dd>{item.price}</dd>
                <dd>
                  <button type="button">구매하기</button>
                  <button type="button">장바구니</button>
                </dd>
              </dl>
            </figcaption>
          </figure>
        )
      })}
    </div>
    </>

  )
}

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


  return(
    <div id="productWrap">
      <p>
          <button type="button" value='all' onClick={(e)=>changeBrand(e)}>전체보기<span className='clickedBtn'></span></button>
          <button type="button" value='keiko' onClick={(e)=>changeBrand(e)}>Keiko<span></span></button>
          <button type="button" value='ramon' onClick={(e)=>changeBrand(e)}>Ramon<span></span></button>
          <button type="button" value='nishane' onClick={(e)=>changeBrand(e)}>Nishane<span></span></button>
      </p>
      <BrandForm brand={brand} brandEx={brandEx} />
    </div>
  )
}