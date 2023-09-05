import './Home.css';
import data from '../product.json';
import { Link } from 'react-router-dom';
// import { cartProductIds } from '../redux/User';
// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';



export default function Home(){
  const bestItems = data.best;
  const newItems = data.new;

  return(
    <>
    <div className='banner'>
      <Swiper
      pagination={{
        type: 'fraction',
      }}
      loop={true}
      autoplay={{
        delay: 2500,
      }}
      navigation={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
      >
        <SwiperSlide><img src='./images/banner/banner_01.jpeg' alt='' /></SwiperSlide>
        <SwiperSlide><img src='./images/banner/banner_02.jpeg' alt='' /></SwiperSlide>
        <SwiperSlide><img src='./images/banner/banner_01.jpeg' alt='' /></SwiperSlide>
      </Swiper>
    </div>
    <div className='bestItem'>
      <div className='subject'>
        <h3>베스트 상품</h3>
        <p>쎈스프래그런스에서 가장 인기있는 향수를 모아봤어요</p>
      </div>
      <div className='homeList'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {bestItems.map((item, index)=>{
            const base = item.base.join(', ');
            return(
              <SwiperSlide key={item.id}>
                <figure>
                  <Link to=""><img src={item.imgUrl} alt={item.name}/></Link>
                  <span>{index+1}</span>
                  <figcaption>
                    <dl>
                      <dt><Link to="">{item.name}</Link></dt>
                      <dd>{base}</dd>
                      <dd>{item.price}</dd>
                    </dl>
                  </figcaption>
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
    <div className='newItem'>
      <div className='subject'>
        <h3>신상품</h3>
        <p>이번에 새로 출시된 향수들이에요</p>
      </div>
      <div className='homeList'>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {newItems.map((item)=>{
            const base = item.base.join(', ')
            return(
              <SwiperSlide key={item.id}>
                <figure>
                  <Link to=""><img src={item.imgUrl} alt={item.name}/></Link>
                  <span>New</span>
                  <figcaption>
                    <dl>
                      <dt><Link to="">{item.name}</Link></dt>
                      <dd>{base}</dd>
                      <dd>{item.price}</dd>
                    </dl>
                  </figcaption>
                </figure>
              </SwiperSlide>
            )
          })}
        </Swiper>
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