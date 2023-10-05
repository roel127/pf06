import './ProductList.css';
import $ from 'jquery';
import data from '../product.json';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/User';
import Item from '../components/Item';

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
  }
  $(function(){
    $('#productWrap>p>button').on('click', function(){
      $('button>span[class = "clickedBtn').removeClass('clickedBtn');
      $(this).children('span').addClass('clickedBtn');
    })
  })

  return(
    <div id="productWrap">
      <p>
          <button type="button" value='all' onClick={(e)=>changeBrand(e)}>전체보기<span className='clickedBtn'></span></button>
          <button type="button" value='keiko' onClick={(e)=>changeBrand(e)}>Keiko<span></span></button>
          <button type="button" value='ramon' onClick={(e)=>changeBrand(e)}>Ramon<span></span></button>
          <button type="button" value='nishane' onClick={(e)=>changeBrand(e)}>Nishane<span></span></button>
      </p>
      <div className="productList">
        <span>전체 <b>{brand.length}</b>개의 제품이 있습니다.</span>
        {brand.map(item=>{
          return(<Item key={item.id} item={item}/>)
        })}
      </div>
    </div>
  )
}