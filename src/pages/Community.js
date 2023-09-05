import './Community.css';
import { Link } from 'react-router-dom';

export default function Community(){
  return(
    <div id="commuWrap">
      <p>
        <b>공지사항</b>
        <br />
        <span>공지사항입니다</span>
      </p>
      <div className="bbs">
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><Link to="/community1">메종 사이브라이트 구매 가이드</Link></td>
              <td>ssensefragrance</td>
              <td>0000-00-00</td>
              <td>0000</td>
            </tr>
            <tr>
              <td>1</td>
              <td><Link to>메종 사이브라이트 구매 가이드</Link></td>
              <td>admin</td>
              <td>0000-00-00</td>
              <td>0000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}