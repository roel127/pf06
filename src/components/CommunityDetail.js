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
        <pre>
          {`
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Vestibulum lacinia tortor ac ligula ultricies, at interdum velit condimentum.
Proin nec ligula in dolor convallis vestibulum.




Cras ornare nibh et blandit hendrerit.

Pellentesque varius mauris quis nibh ultricies dapibus.
Mauris elementum arcu sed urna auctor bibendum.
Maecenas eget nulla et ipsum vulputate viverra.
In blandit urna scelerisque risus ornare, at placerat ligula dignissim.
Nam at neque aliquam, fringilla dui a, dignissim purus.
Aenean sodales justo tincidunt urna sollicitudin viverra.

Proin semper lectus eget elit sodales, ultrices pharetra orci tincidunt.
Phasellus sed turpis consectetur, pulvinar eros quis, porta diam.
Aenean eleifend lacus nec ex sodales suscipit.
Donec dictum augue at rhoncus sollicitudin.
Duis at arcu tristique, varius nunc ac, sagittis velit.

Integer tempus massa sed magna elementum, in egestas arcu pellentesque.
Sed tincidunt tortor eu lobortis congue.`}
        </pre>
      </div>
    </div>
    <div className='boardBtn'>
      <button type='button'>목록</button>
    </div>
    </>
  )
}