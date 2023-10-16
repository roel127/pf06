import { HiStar } from 'react-icons/hi';

export default function( {cont} ){
  return(
    <div className='topView'>
      <img src={"."+cont.imgUrl} alt={cont.name} />
      <ul>
        <li>
          <ul>
            <li>상품만족도</li>
            <li><span><HiStar /></span>5.0 /5</li>
            <li><span>{cont.topics.length}</span> 개의 리뷰가 있습니다.</li>
            <li><button type='button'>리뷰 작성하기</button></li>
          </ul>
        </li>
        <li>
          <ul>
            <li>5점 <span>100%</span></li>
            <li>4점 <span>0%</span></li>
            <li>3점 <span>0%</span></li>
            <li>2점 <span>0%</span></li>
            <li>1점 <span>0%</span></li>
          </ul>
        </li>
        <li>
          <ul>
            <li>성별</li>
            <li>남녀공용50.0%&#30;2명&#41;</li>
            <li>여성50.0%&#30;2명&#41;</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}