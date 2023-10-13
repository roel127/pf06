import './Magazine.css';
import { Link, useParams } from "react-router-dom";
import noticeData from '../notice.json';
import data from '../product.json';

export default function Magazine(){
  const params = useParams();
  const mgz = noticeData.magazine.filter(item=>{
    if(item.slug === params.slug){
      return item;
    }
  })
  return(
    <div id="mgWrap">
      <div className='mgInfo'>
        {/* <img src="./images/magazine/magazine_01.jpeg" alt="" /> */}
        {mgz.map(item=>{
          return(
            <img src={item.imgUrl} alt={item.name} key={item.slug}/>
          )
        })}
      </div>
      <div className="rcm">
        <p>추천상품</p>
        <div>
        {data.recommaned.map(item=>{
          return(
            <figure key={item.id}>
              <Link to={`/product/${item.slug}`}><img src={item.imgUrl} alt="" /></Link>
              <figcaption>
                <dl>
                  <dt><Link to={`/product/${item.slug}`}>{item.name}</Link></dt>
                  <dd>{item.base.join(', ')}</dd>
                  <dd>{item.price}</dd>
                </dl>
              </figcaption>
            </figure>
          )
        })}
        </div>
      </div>
    </div>
  )
}