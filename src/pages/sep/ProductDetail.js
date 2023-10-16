export default function ProductDetail( {cont} ){
  return(
    <>
    {
      cont.name.includes('케이코') &&
      (<img src='../images/keiko/keiko_all.jpeg' />) ||
      cont.name.includes('라몬') &&
      (<img src='../images/ramon/ramon_all.jpeg' />)
    }
    {cont.detailImg.map((item, index)=>{
      return(
        <img key={index} src={item} alt='' />
      )
    })}
    </>
  )
}