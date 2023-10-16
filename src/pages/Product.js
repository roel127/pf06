import './Product.css';
import { useParams } from 'react-router-dom';
import data from '../product.json';
import ItemInfo from './sep/ItemInfo';
import ItemPic from './sep/ItemPic';
import ProductDetail from './sep/ProductDetail';
import ProductGuide from './sep/ProductGuide';
import ProductReview from './sep/ProductReview';


export default function Product(){
  const params = useParams();
  const str = params.slug.split('_');
  const cont = data[str[0]].stuff.filter(item=>{
    return item.id.length === 1 ? '0'+item.id == Number(str[1])-1 : item.id == Number(str[1])-1
  })[0];

  window.addEventListener('scroll', function(){
    if(this.window.scrollY > 1000){
      document.querySelector('.bottomBtn').classList.add('fixed');
      document.querySelector('.bottomInfo>img:first-child').style.marginTop = '65px';
    } else{
      document.querySelector('.bottomBtn').classList.remove('fixed');
      document.querySelector('.bottomInfo>img:first-child').style.marginTop = 0;
    }
  })
  function scrollClick(e){
    const text = e.target.textContent;
    const itemInfo = document.querySelector('.bottomInfo').offsetTop;
    const itemGuide = document.querySelector('.guide').offsetTop;
    const itemReview = document.querySelector('.review').offsetTop;
    const height = document.querySelector('.bottomBtn').offsetHeight;
    if(text === '제품상세'){
      window.scrollTo({top: itemInfo - height, behavior: 'smooth'});
      document.querySelector('.bottomInfo>img:first-child').style.marginTop = '65px';
    } else if(text === '상품구매안내'){
      window.scrollTo({top: itemGuide - 85, behavior: 'smooth'});
    } else{
      window.scrollTo({top: itemReview - 85, behavior: 'smooth'});
    }
  }
  return(
    <div id='detail'>
      <section>
        <ItemPic cont={cont} />
        <ItemInfo cont={cont} str={str} />
      </section>
      <section>
        <div className='bottomBtn'>
          <button type='button' onClick={(e)=>scrollClick(e)}>제품상세</button>
          <button type='button' onClick={(e)=>scrollClick(e)}>상품구매안내</button>
          <button type='button' onClick={(e)=>scrollClick(e)}>리뷰 <span>&#40;{cont.topics.length}&#41;</span></button>
        </div>
        <div className='bottomInfo'>
          <ProductDetail cont={cont}/>
          <ProductGuide />
          <ProductReview cont={cont} />
        </div>
      </section>
    </div>
  )
}