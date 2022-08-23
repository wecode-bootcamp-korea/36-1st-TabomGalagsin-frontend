import './CartFooter.scss';

function CartFooter() {
  return (
    <div className="cartFooter">
      <footer className="footerInfo">
        <div className="icons">
          <img src="/images/footer/icon-instagram.png" alt="linkIcon" />
          <img src="/images/footer/icon-facebook.png" alt="linkIcon" />
          <img src="/images/footer/icon-phone.png" alt="linkIcon" />
          <img
            src="/images/footer/icon-github.png"
            className="github"
            alt="linkIcon"
          />
        </div>
        <div className="infos">
          <p className="bold">&copy; 따봉 가락신. 판권 소유.</p>
          <p>
            회사 이름: Alpargatas SA • CNPJ: 61.079.117/0001-05 • 주소: Av. of
            the United Nations, nº 14.261 - Ala A - 10층 - São Paulo - São Paulo
            - Brazil - CEP 04794-000 • CNPJ: 61.079.117/0001-05 연락처: SP (11)
            3003-3414 | 기타 지역 0800 7070 566. 운영 시간: 월요일부터
            금요일까지 오전 9시부터 오후 6시까지. 지불 옵션: 신용 카드(Visa,
            MasterCard, Elo, Amex, Diners Club 및 Hipercard) 및 Boleto Bancário.
          </p>
        </div>
      </footer>
    </div>
  );
}
export default CartFooter;
