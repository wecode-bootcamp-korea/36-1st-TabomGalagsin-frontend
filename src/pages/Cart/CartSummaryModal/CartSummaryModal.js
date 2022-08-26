import React, { useEffect, useState } from 'react';
import { API } from '../../../config.js';
import { appendComma } from '../../../utils';
import { useNavigate } from 'react-router-dom';
import './CartSummaryModal.scss';

function CartSummaryModal({ summaryPrice, setCartedCount }) {
  const navigate = useNavigate();

  const [userPoints, setUserPoints] = useState(0);
  const [productListData, setProductListData] = useState([]);
  const [userToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    fetch(`${API.POINTS}`, {
      headers: {
        authorization: userToken,
      },
    })
      .then(response => response.json())
      .then(res => {
        setUserPoints(res.beforeUserPoint);
      });
  }, [userToken]);

  useEffect(() => {
    fetch(`${API.CART}`, {
      headers: {
        authorization: userToken,
      },
    })
      .then(response => response.json())
      .then(res => {
        setProductListData(res.cart);
      });
  }, [userToken]);

  return (
    <>
      <div className="cartSummaryModal" />
      <div className="modalBox">
        <div className="modalTop">결제 내역</div>
        <div className="modalMiddle">
          <div className="modalCurrentCredit">
            보유 크레딧 : ₩ {!!userPoints ? appendComma(Number(userPoints)) : 0}
          </div>
          <div className="modalProductList">
            <div className="modalProductListWrap">
              {productListData.map(
                ({ orderItemsId, productName, quantity, price }) => {
                  return (
                    <div className="productText" key={orderItemsId}>
                      <div className="productTextName">{productName}</div>
                      <div className="productTextPriceContainer">
                        <div className="productTextPriceWrap">
                          <div className="productTextPrice">
                            상품 가격 : ₩ {appendComma(Number(price))}{' '}
                          </div>
                          <div className="productTextQuantity">
                            구입 수량 : {quantity}
                          </div>
                        </div>
                        <div className="productTextTotalPrice">
                          품목 별 금액 : ₩{' '}
                          {appendComma(Number(price * quantity))}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="modalTotalPrice">
            전체 합산 금액 : ₩{appendComma(Number(summaryPrice))}
          </div>
          <div className="modalTotalResult">
            <div className="modalTotalResultPrice">
              결제 후 잔액 : ₩{appendComma(Number(userPoints - summaryPrice))}
            </div>
            <div className="modalTotalResultSubmit">
              <button
                className="modalExit flipflopCursor"
                onClick={() => {
                  if (userPoints - summaryPrice < 0) {
                    alert('크레딧이 부족합니다, 메인화면으로 이동합니다.');
                    return navigate('/');
                  }

                  fetch(`${API.PAYMENT}`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'Application/json',
                      authorization: userToken,
                    },
                    body: JSON.stringify({
                      totalPrice: Number(summaryPrice),
                    }),
                  });
                  setCartedCount(0);
                  localStorage.setItem('totalProduct', 0);
                  alert('결제가 완료되었습니다.');

                  navigate('/');
                }}
              >
                결제하기
              </button>
            </div>
          </div>
        </div>
        <div className="modalBottom" />
      </div>
    </>
  );
}

export default CartSummaryModal;
