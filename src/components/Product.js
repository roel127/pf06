import './Product.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export function ProductDetail(){
  return(
    <img src='' alt='' />
  )
}
export function ProductGuide(){
  return(
    <div>
      <p>상품구매안내</p>
      <div className='tableCont'>
        <p>결제 안내</p>
        <table>
          <tbody>
            <tr>
              <th>결제 안내</th>
              <td>
                <ul>
                  <li>고액결제의 경우 안전을 위해 카드사에서 확인전화를 드릴 수도 있습니다. 확인과정에서 도난 카드의 사용이나 타인 명의의 주문등 정상적인 주문이 아니라고 판단될 경우 임의로 주문을 보류 또는 취소할 수 있습니다.</li>
                  <li>무통장 입금은 상품 구매 대금은 PC뱅킹, 인터넷뱅킹, 텔레뱅킹 혹은 가까운 은행에서 직접 입금하시면 됩니다.</li>
                  <li>주문시 입력한 입금자명과 실제입금자의 성명이 반드시 일치하여야 하며, 7일 이내로 입금을 하셔야 하며 입금되지 않은 주문은 자동취소 됩니다.</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='tableCont'>
        <p>배송 안내</p>
        <table>
          <tbody>
            <tr>
              <th>결제 안내</th>
              <td>택배</td>
            </tr>
            <tr>
              <th>배송 지역</th>
              <td>전국지역</td>
            </tr>
            <tr>
              <th>배송 비용</th>
              <td>무료</td>
            </tr>
            <tr>
              <th>배송 기간</th>
              <td>1일 ~ 2일</td>
            </tr>
            <tr>
              <th>배송 안내</th>
              <td>
                <ul>
                  <li>배송 방법 : 택배</li>
                  <li>배송 지역 : 전국지역</li>
                  <li>
                    배송 안내 : 산간벽지나 도서지방은 별도의 추가금액을 지불하셔야 하는 경우가 있습니다.
                    <br />
                    <span>고객님께서 주문하신 상품은 입금 확인 후 배송해 드립니다. 다만, 상품종류에 따라서 상품의 배송이 다소 지연될 수 있습니다.</span>
                  </li>
                  <li>
                    국내배송
                    <br />
                    <span>배송비: 무료 배송&#40;일부상품 제외&#41;</span>
                    <br />
                    <span>배송기간: 당일 배송&#40;지역에 따라 1~2일 소요&#41;</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='tableCont'>
        <p>교환/반품 안내</p>
        <table>
          <tbody>
            <tr>
              <th>교환/반품 안내</th>
              <td>
                <ul>
                  <li>
                    <dl>
                      <dt>교환 및 반품이 가능한 경우</dt>
                      <dd>
                        - 상품을 공급 받으신 날로부터 7일이내
                        <br />
                        <span>단, 향수 특성상 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.</span>
                      </dd>
                      <dd>- 공급받으신 상품 및 용역의 내용이 표시, 광고 내용과 다르거나 다르게 이행된 경우에는 공급받은 날로부터 3월이내, 그 사실을 알게 된 날로부터 30일이내</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>교환 및 반품이 불가능한 경우</dt>
                      <dd>- 향수 특성상 포장을 개봉하였거나 포장이 훼손되어 상품가치가 상실된 경우에는 교환/반품이 불가능합니다.</dd>
                      <dd>- 본품 외 함께 증정된 사은품, 샘플 개봉 시 반품 불가능합니다.</dd>
                      <dd>
                        - 고객님의 사용 또는 일부 소비에 의하여 상품의 가치가 현저히 감소한 경우
                        <br />
                        <span>단, 화장품등의 경우 시용제품을 제공한 경우에 한 합니다.</span>
                      </dd>
                      <dd>- 시간의 경과에 의하여 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</dd>
                    </dl>
                  </li>
                  <li>
                    <span>※ 고객님의 마음이 바뀌어 교환, 반품을 하실 경우 상품반송 비용 6,000원이 발생하며 고객님께서 부담하셔야 합니다. &#40;사이즈 교환 등 포함&#41;</span>
                    <br />
                    <span>※ 해외배송 제품 반품 및 환불과 관련된 자세한 내용은 1:1 고객센터를 이용해주시길 바랍니다.</span>
                  </li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='tableCont'>
        <p>서비스문의</p>
        <table>
          <tbody>
            <tr>
              <th>서비스문의 안내</th>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export function ProductReview(){
  return(
    <div>



    {/* <pre>
      {`
      처음 뿌리자마자 났던 향은 블랙베리의 달콤함입니다. 10~20초가량은 달콤한 블랙베리의 향이 지배적이고 이후 블랙 커런트의 쌉쌀함이 블랙베리 사이사이를 터치해주며 달콤함이 지배적이었던 분위기에 변주를 줍니다. 블랙 커런트의 향이 점점 날아가면서 향수의 주인공인 산딸기(wild berry)가 본연의 모습을 드러냅니다. 미들 노트에서도 역시 단순하다고 느껴질 수 있는 베리류의 달콤함이 쭉 유지되는 것이 아닌 블랙 커런트 새싹의 쌉쌀한 풀의 느낌이 베리의 독주에 조금씩 스며 들어가면서 진부할 수 있는 달콤함에 포인트를 줍니다. 이는 마치 산딸기가 무성하게 열린 따뜻한 여름날의 농장을 연상케 합니다. 베리와 블랙 커런트의 합주 이후 베이스 노트에서는 머스크+우디 조합의 향이 납니다. 우디가 머스크에 비해 존재감이 더 있는 편이긴 하나 그렇다고 무거운 우디는 아닙니다. 햇볕 아래 아주 잘 말린 가벼운 우디의 느낌입니다. 기온이 높은 날 다소 답답하다고 느껴질 수 있는 머스크의 향을 가벼운 느낌의 우디가 잘 잡아주어 마냥 답답하지 않게 만들어 줍니다.

      결론적으로 베리의 달콤함과 블랙 커런트의 달콤쌉쌀함을 조화시키고자 했던 조향사의 의도가 느껴지는 성공적인 향수입니다.
      한여름 따듯한 햇살을 맞으며 산딸기 농장을 걷는 폴라로이드 속 연인들의 모습이 연상이 되고 마무리까지 하나의 향조가 마냥 튀지 않는 밸런스가 잘 잡혀있는 향수라고 생각됩니다.
      
      지속발향은 무난하며 개인적으로 사계절 데일리로 뿌려도 문제 없을 향이라고 생각합니다.
      
      제가 향수에서 느꼈던 느낌을 리뷰를 보시는 분들께서 시각화하시기 쉽게 어울릴만한 사진을 함께 첨부합니다.
      `}
    </pre> */}
    </div>
  )
}

export default function Product(){
  return(
    <div id='detail'>
      <section>
        <div className='topView'>
          <img src='./images/keiko/keiko_wild_berries.jpeg' alt='' />
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div>
            <Swiper
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper"
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
          </div>
        </div>
        <div className='topInfo'>
          <dl>
            <dt>케이코 메쉐리 와일드 베리즈 오 드 퍼퓸 100ml</dt>
            <dd>Floral, Fruity</dd>
            <dd>220,000원</dd>
            <dd>
              <ul>
                <li><dfn>브랜드</dfn><span>Keiko</span></li>
                <li><dfn>할인</dfn><span>적용안됨</span></li>
                <li><dfn>배송비</dfn><span>무료</span></li>
              </ul>
            </dd>
          </dl>
          <table>
            <thead className='hide'>
              <tr>
                <th>상품명</th>
                <th>
                  <button type='button'>-</button>
                  <span>상품수</span>
                  <button type='button'>+</button>
                </th>
                <th>가격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>name</td>
                <td>
                  <button type='button'>-</button>
                  <span>count</span>
                  <button type='button'>+</button>
                </td>
                <td>price</td>
              </tr>
            </tbody>
          </table>
          <p>
            <span>총 상품금액</span>
            <span>000,000원 &#40;0개&#41;</span>
          </p>
          <p><button>선물하기</button></p>
          <p>
            <button>바로 구매</button>
            <button>장바구니</button>
          </p>
        </div>
      </section>
      <section>
        <div className='bottomBtn'>
          <button type='button'>제품상세</button>
          <button type='button'>상품구매안내</button>
          <button type='button'>리뷰 <span>&#40;0&#41;</span></button>
        </div>
        <div className='bottomInfo'>
          <ProductDetail />
          <ProductGuide />
        </div>
      </section>
    </div>
  )
}