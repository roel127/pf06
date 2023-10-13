import './CommunityDetail.css';

export default function CommunityDetail(){
  return(
    <>
    <div className='board'>
      <div className='boardInfo'>
      <p>8월 연휴 배송관련 공지</p>
      <ul>
        <li>
          <span>ssensefragrance</span>
          <span>0000-00-00</span>
        </li>
        <li>조회수 <span>00</span></li>
      </ul>
      </div>
      <div className='boardCont'>
        <p>{}</p>
      </div>
    </div>
    <div className='boardBtn'>
      <button type='button'>목록</button>
    </div>
    </>
  )
}