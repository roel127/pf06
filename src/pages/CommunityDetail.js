import { useParams } from 'react-router-dom';
import './CommunityDetail.css';
import noticeData from '../notice.json';

export default function CommunityDetail(){
  const params = useParams();
  const content = noticeData.notice;
  let noticeNum;
  noticeData.notice.forEach(notice=>{
    const Ids = notice.id;
    Ids.length <= 1 ? noticeNum = Number(params.slug.substring(7)) - 1 : noticeNum = Number(params.slug.substring(6)) - 1;
  })
  const str = content[noticeNum];
  const strSpace = str.cont.split('.');
  
  // parmas.slug의 숫자 중에 앞에 0이 있다면 뒷 자리만 가지고 id를 추출하고 아니라면 숫자 전부를 가지고 id 추출
  // 만약 세자리 숫자라면? 그럼 첫 번째 인덱스의 값이 0이 아닌데?? length별로 나눠야 한다...
  const slugNum = params.slug.substring(6);
  // slugNum[0] == 0 ? 
  console.log(slugNum);

  return(
    <>
    <div className='board'>
      <div className='boardInfo'>
      <p>{str.subject}</p>
      <ul>
        <li>
          <span>{str.writer}</span>
          <span>{str.reportDate}</span>
        </li>
        <li>조회수 <span>00</span></li>
      </ul>
      </div>
      <div className='boardCont'>
        {strSpace.map((item, index)=>{
          return(
            <p key={index}>{item}</p>
          )
        })}
      </div>
    </div>
    <div className='boardBtn'>
      <button type='button'>목록</button>
    </div>
    </>
  )
}