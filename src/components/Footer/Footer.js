function Footer() {
  return (
    <footer className="footer">
      <div className="menuContainer">
        <div className="menu">
          <h3>계정</h3>
          <ul>
            <li>내 계정</li>
            <li>주문을 추적하다</li>
          </ul>
        </div>
        <div className="menu">
          <h3>온라인 구매</h3>
          <ul>
            <li>블랙 프라이데이 하바이나</li>
            <li>주문을 추적하다</li>
          </ul>
        </div>
        <div className="menu">
          <h3>계정</h3>
          <ul>
            <li>내 계정</li>
            <li>주문을 추적하다</li>
          </ul>
        </div>
        <div className="menu">
          <h3>계정</h3>
          <ul>
            <li>내 계정</li>
            <li>주문을 추적하다</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

const MENU_LIST = [
  { title: '계정', detailedMenus : ['내 계정', '주문을 추적하다']},
  { title: '온라인 구매', detailedMenus : ['', '주문을 추적하다']},
  { title: '돕다', detailedMenus : ['내 계정', '주문을 추적하다']},
  { title: '회사 소개', detailedMenus : ['내 계정', '주문을 추적하다']},
  { title: '가게를 찾아', detailedMenus : ['내 계정', '주문을 추적하다']},
];

const MENU_1 = ['내 계정', '주문을 추적하다']
const MENU_2 = ['블랙 프라이데이 따봉 가락신', 'WhatsApp으로 구매', '부속품', '에스파드리유', '아기 슬리퍼', '여성용 슬리퍼','어린이 슬리퍼', '남성용 슬리퍼', '아파트', '여성복', '남성복', '운동화' ]
const MENU_3 = ['WhatsApp의 도움말', LIBRAS의 서비스, 따봉 갈락신을 청소하는 방법, 자주하는 질문, 문의하기, 배송 정책, 지불 정책, 개인 정보 정책, 개인정보 포털, 규제, 이용약관, 교환 및 반품]
const MENU_4 = []
const MENU_5 = []