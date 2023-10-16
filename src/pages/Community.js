import './Community.css';
import { Link } from 'react-router-dom';
import noticeData from '../notice.json';

export default function Community(){
  const notice = noticeData.notice;
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
            {notice.map(item=>{
              return(
                <tr key={item.id}>
                  <td>{item.num}</td>
                  <td><Link to={item.slug}>{item.subject}</Link></td>
                  <td>{item.writer}</td>
                  <td>{item.reportDate}</td>
                  <td>0000</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}