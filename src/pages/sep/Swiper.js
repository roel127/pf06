import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';

export function SwiperBanner(){
  return(
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
      <SwiperSlide><img src='./images/banner/banner_01.jpeg' alt='배너1' /></SwiperSlide>
      <SwiperSlide><img src='./images/banner/banner_02.jpeg' alt='배너2' /></SwiperSlide>
      <SwiperSlide><img src='./images/banner/banner_01.jpeg' alt='배너3' /></SwiperSlide>
    </Swiper>
  )
}

export function SwiperProduct( {products, children} ){
  const isLabel = (index) => {
    return children ? <span>{children}</span> : <span>{index+1}</span>
  }

  return(
    <Swiper
      slidesPerView={3.5}
      spaceBetween={30}
      mousewheel={{
        forceToAxis: true,
      }}
      modules={[Pagination, Mousewheel]}
      className="mySwiper"
    >
      {products.map((item, index)=>{
        const base = item.base.join(', ');
        return(
          <SwiperSlide key={item.slug}>
            <figure>
              <Link to={`/product/${item.slug}`}><img src={item.imgUrl} alt={item.name}/></Link>
              {isLabel(index)}
              <figcaption>
                <dl>
                  <dt><Link to={`/product/${item.slug}`}>{item.name}</Link></dt>
                  <dd>{base}</dd>
                  <dd>{item.price}원</dd>
                </dl>
              </figcaption>
            </figure>
          </SwiperSlide>
        )
      })}
    </Swiper>
  )
}