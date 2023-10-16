export default function ProductReview( {cont} ){
  function maskingName(name){
    name = name.replace(/(?<=.{1})./gi, "*");
    return name;
  }
  return(
    <div className='review'>
      <p>상품 리뷰</p>
      <div>
        {cont.topics.map((item, index)=>{
          return(
            <ul key={index}>
              <li>
                {maskingName(item.topic.name)}
              </li>
              <li>
                {item.topic.cont}
              </li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
