import './Magazine.css';
import { Link } from "react-router-dom";

export default function Magazine(){
  return(
    <div id="mgWrap">
      <div className='mgInfo'>
        <img src="./images/magazine/magazine_01.jpeg" alt="" />
      </div>
      <div className="rcm">
        <p>추천상품</p>
        <div>
        <figure>
          <Link to=""><img src="./images/keiko/keiko_hanae.jpeg" alt="" /></Link>
          <figcaption>
            <dl>
              <dt><Link to="">name</Link></dt>
              <dd>base</dd>
              <dd>price</dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <Link to=""><img src="./images/keiko/keiko_hanae.jpeg" alt="" /></Link>
          <figcaption>
            <dl>
              <dt><Link to="">name</Link></dt>
              <dd>base</dd>
              <dd>price</dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <Link to=""><img src="./images/keiko/keiko_hanae.jpeg" alt="" /></Link>
          <figcaption>
            <dl>
              <dt><Link to="">name</Link></dt>
              <dd>base</dd>
              <dd>price</dd>
            </dl>
          </figcaption>
        </figure>
        <figure>
          <Link to=""><img src="./images/keiko/keiko_hanae.jpeg" alt="" /></Link>
          <figcaption>
            <dl>
              <dt><Link to="">name</Link></dt>
              <dd>base</dd>
              <dd>price</dd>
            </dl>
          </figcaption>
        </figure>
        </div>
      </div>
    </div>
  )
}