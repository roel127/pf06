import './Home.css';
import data from '../product.json';
import { Link } from 'react-router-dom';
import { SwiperBanner, SwiperProduct } from './sep/Swiper';

export default function Home(){
  const bestItems = data.best;
  const newItems = data.new;
  return(
    <>
    <div className='banner'>
      <SwiperBanner />
    </div>
    <div className='bestItem'>
      <div className='subject'>
        <h3>베스트 상품</h3>
        <p>쎈스프래그런스에서 가장 인기있는 향수를 모아봤어요</p>
      </div>
      <div className='homeList'>
        <SwiperProduct products={bestItems} />
      </div>
    </div>
    <div className='newItem'>
      <div className='subject'>
        <h3>신상품</h3>
        <p>이번에 새로 출시된 향수들이에요</p>
      </div>
      <div className='homeList'>
        <SwiperProduct products={newItems} children={'new'}/> 
      </div>
    </div>
    <div className='sectionVideo'>
      <div className='videoCont'>
        <div className='subject'>
          <h3>참고영상</h3>
          <p>향수를 구매하기 전 참고하기 좋아요</p>
        </div>
        <iframe src="https://www.youtube.com/embed/monwruhpCLo?si=bFOosjKTUibBHwv0?mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>
    </div>
    </>
  )
}