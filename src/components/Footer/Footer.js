import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="menuContainer">
        {MENU_LIST.map(menu => {
          return (
            <div key={menu.title} className="menu">
              <div className="title">
                <img className="menuIcon" src={menu.iconSrc} alt="icon" />
                <h3>{menu.title}</h3>
                <img
                  className="chevron"
                  src="/images/footer/icon-chevron.png"
                  alt="bottom-chevron"
                />
              </div>
              <ul>
                {menu.detailedMenus.map(detailMenu => (
                  <li key={detailMenu}>
                    <a href="/">{detailMenu}</a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
}
export default Footer;

const MENU_1 = ['내 계정', '주문을 추적하다'];
const MENU_2 = [
  '블랙 프라이데이 따봉 가락신',
  'WhatsApp으로 구매',
  '부속품',
  '에스파드리유',
  '아기 슬리퍼',
  '여성용 슬리퍼',
  '어린이 슬리퍼',
  '남성용 슬리퍼',
  '아파트',
  '여성복',
  '남성복',
  '운동화',
];
const MENU_3 = [
  'WhatsApp의 도움말',
  'LIBRAS의 서비스',
  '따봉 갈락신을 청소하는 방법',
  '자주하는 질문',
  '문의하기',
  '배송 정책',
  '지불 정책',
  '개인 정보 정책',
  '개인정보 포털',
  '규제',
  '이용약관',
  '교환 및 반품',
];
const MENU_4 = [
  '하아비아나스 역사',
  '국제 사무소',
  '하와이 프랜차이즈',
  '해외 매장',
  'Havaianas재활용',
  '프랜차이즈가 되다',
  '리셀러가 되다',
  '지속 가능성',
  '우리와 함께 일',
];
const MENU_5 = ['지도'];

const MENU_LIST = [
  {
    title: '계정',
    iconSrc: '/images/footer/icon_user.png',
    detailedMenus: MENU_1,
  },
  {
    title: '온라인 구매',
    iconSrc: '/images/footer/icon_user.png',
    detailedMenus: MENU_2,
  },
  {
    title: '돕다',
    iconSrc: '/images/footer/icon_user.png',
    detailedMenus: MENU_3,
  },
  {
    title: '회사 소개',
    iconSrc: '/images/footer/icon_user.png',
    detailedMenus: MENU_4,
  },
  {
    title: '가게를 찾아',
    iconSrc: '/images/footer/icon_user.png',
    detailedMenus: MENU_5,
  },
];
