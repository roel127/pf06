import { Link } from "react-router-dom"

export default function Footer(){
  return(
    <footer>
      <div>
        <img src="./images/logo_footer.png" alt="" />
        <div>
          <ul>
            <li><span>고객센터 </span>000-0000-0000</li>
            <li><span>평일 : </span>09:00 ~ 18:00</li>
            <li><span>점심시간 : </span>12:30 ~ 13:30</li>
            <li>토/일/공휴일 휴무</li>
          </ul>
          <ul>
            <li>
              <Link to>회사소개</Link>
            </li>
            <li>
              <Link to>이용약관</Link>
            </li>
            <li>
              <Link to>개인정보 취급방침</Link>
            </li>
            <li>
              <Link to>이용안내</Link>
            </li>
          </ul>
        </div>
        <div>
          <p>사업자 정보</p>
          <ul>
            <li><span>법인명(상호) : </span>향수판매점</li>
            <li><span>대표자 : </span>김철수</li>
            <li><span>전화 : </span>000-0000-0000</li>
            <li><span>개인정보관리책임자 : 김철수</span></li>
            <li><span>사업자등록번호 : </span>000-00-00000</li>
            <li><span>통신판매업신고 : </span>제 2023-서울강남-00000 호</li>
            <li><span>주소 : </span>서울시 강남구 압구정로00길 00 &#40;땡땡동&#41;</li>
            <li><span>비지니스 문의 : example@example.com</span></li>
          </ul>
        </div>
        <small>Copyright &copy; ssensefragrance. All rights reserved</small>
      </div>
    </footer>
  )
}