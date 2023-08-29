import './ProductList.css';
import { Link } from 'react-router-dom';

export function BrandForm(){
  return(
    <figure>
      <Link to=""><img src="./images/keiko/keiko_hanae.jpeg" alt="" /></Link>
      <figcaption>
        <dl>
          <dt><Link to="">니샤네 스웨이드 엣 사프란 엑스뜨레 드 퍼퓸 50ml</Link></dt>
          <dd>base</dd>
          <dd>price</dd>
          <dd>
            <button type="button">구매하기</button>
            <button type="button">장바구니</button>
          </dd>
        </dl>
      </figcaption>
    </figure>
  )
}

export default function ProductList(){
  return(
    <div id="productWrap">
      <p>
        <span>
          <button type="button">전체보기</button>
          <button type="button">Keiko</button>
          <button type="button">Ramon</button>
          <button type="button">Nishane</button>
        </span>
      </p>
      <p>NISHANE은 예술적 향수에 대한 탁월한 관점으로 전 세계적으로 찬사를 받는 최초이자 유일한 이스탄불 기반의 틈새 향수 브랜드입니다. 이는 향기 생성의 독특함으로 쉽게 인식될 수 있습니다. 수많은 문명을 포용한 이스탄불의 뿌리 깊은 전통, 현대적 비전, 국제적인 구조에서 영감을 받았습니다. 니샤네는 세심하게 디자인된 아티스틱한 컬렉션의 유니크하고 세련된 향과 우아한 터치로 당신과 당신이 사랑하는 사람에게 부여하는 가치의 지표가 될 준비가 되어 있습니다. 이는 뿌리깊은 문화에서 파생된 독점감을 제안하는 것입니다.  </p>
      <p>섬세한 향기가 깨달은 감정과 함께 소중한 추억을 불러일으킬 수 있다는 점을 염두에 두고 NISHANE은 자신의 컬렉션을 세계에 자랑스럽게 선보이며  이 브랜드를 세계 최고의 향수 애호가로 만든 전 세계 향수 애호가들의 끊임없는 감사를 보고 기쁘게 생각합니다. 세계에서 가장 유명하고, 가장 널리 퍼져 있으며, 가장 많이 팔리는 틈새 향수 브랜드입니다.</p>
      <div className="productList">
        <BrandForm />
        <BrandForm />
        <BrandForm />
        <BrandForm />
        <BrandForm />
      </div>
    </div>
  )
}