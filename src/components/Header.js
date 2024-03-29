import $ from 'jquery';
import { Link } from "react-router-dom"
import { FiSearch } from 'react-icons/fi';

export function LogOut({handler, k}){
  return(
    <Link to="/" onClick={()=>handler()} className='loginBtn'>로그아웃</Link>
  )
}

export default function Header( {clickBrand, myLog, handler} ){
  // when move used tab key.
  $(function(){
    const parentLi = $('nav>ul>li');
    const childLi = $('nav>ul>li>ul');

    // li:hover 하위 메뉴 처리
    $('nav>ul>li:has(ul)')
    .on('mouseenter', function(){
      $(this).children('ul').show();
    })
    .on('mouseleave', function(){
      $(this).children('ul').hide();
    });
    // subMenu:hover 처리
    childLi.children('li').children('a').on('mouseenter', function(){
      $(this).addClass('menuHover');
    })
    .on('mouseleave', function(){
      $(this).removeClass('menuHover');
    })

    // li:focus 하위 메뉴 처리 
    parentLi.children('a').on('focus', function(e){
      e.preventDefault();
      const nextUl = $(this).next('ul');
      // const nextLi = $(nextUl).next('li');
      const hasUl = nextUl[0] !== undefined;
      if( hasUl ){nextUl.show();} else{nextUl.hide();}
      // nextUl.show();
      // childLi.not(':has(li[class = "focusNav"])').hide();
    })

    childLi.children('li').children('a').on('focus', function(){
      $(this).parent('li').addClass('focusNav');
    })
    .on('focusout', function(){
      $(this).parent('li').removeClass('focusNav');
    })
    // childLi.not(':has(a[class = "focusNav"])').hide();
  })
  return(
    <header>
      <div>
        <h1>
          <Link to="/"><img src="/images/logo.png" alt="ssense fragrance"/></Link>
        </h1>
        <ul>
          <li>
            {
              myLog.token === null ? <Link to="/login" className='loginBtn'>로그인</Link> : <LogOut handler={handler} />
            }
          </li>
          <li>
            <Link to="*">마이페이지</Link>
          </li>
          <li>
            <Link to="/Cart">장바구니</Link>
          </li>
        </ul>
      </div>
      <div>
        <nav>
          <h2 className="hide">메인네비게이션</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product" onClick={()=>clickBrand('all')}>Product</Link>
              <ul>
                <li><Link to='/product' onClick={()=>clickBrand('keiko')}>Keiko</Link></li>
                <li><Link to='/product' onClick={()=>clickBrand('ramon')}>Ramon</Link></li>
                <li><Link to='/product' onClick={()=>clickBrand('nishane')}>Nishane</Link></li>
              </ul>
            </li>
            <li>
              <Link to>Magazine</Link>
              <ul>
                <li><Link to="/citrus">Citrus</Link></li>
                <li><Link to="/fruity">Fruity</Link></li>
              </ul>
            </li>
            <li>
              <Link to>Community</Link>
              <ul>
                <li><Link to="Community">공지사항</Link></li>
                <li><Link to>FAQ</Link></li>
                <li><Link to>이벤트</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
        <form>
          <input type="text" />
          <button type="submit"><FiSearch /></button>
        </form>
      </div>
    </header>
  )
}