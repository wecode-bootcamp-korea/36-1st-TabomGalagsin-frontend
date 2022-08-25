import React, { useEffect, useState } from 'react';
import { API } from '../../../config.js';
import { appendComma } from '../../../function';
import { useNavigate } from 'react-router-dom';
import './CartSummaryModal.scss';

function CartSummaryModal({ summaryPrice }) {
  const navigate = useNavigate();

  const [userPoints, setUserPoints] = useState(0);
  const [productListData, setProductListData] = useState([]);

  useEffect(() => {
    fetch(`${API.POINTS}`, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
      },
    })
      .then(response => response.json())
      .then(res => {
        setUserPoints(res.beforeUserPoint);
      });
  }, []);

  useEffect(() => {
    fetch(`${API.CART}`, {
      headers: {
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
      },
    })
      .then(response => response.json())
      .then(res => {
        setProductListData(res.cart);
      });
  }, []);
  return (
    <>
      <div className="cartSummaryModal" />
      <div className="modalBox">
        <button
          className="modalExit"
          onClick={() => {
            navigate('/');
            fetch(`${API.PAYMENT}`, {
              method: 'POST',
              headers: {
                'Content-Type': 'Application/json',
                authorization:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
              },
              body: JSON.stringify({
                totalPrice: Number(summaryPrice),
              }),
            });
          }}
        >
          {' '}
          x{' '}
        </button>
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
            결제 후 잔액 : ₩{appendComma(Number(userPoints - summaryPrice))}
          </div>
        </div>
        <div className="modalBottom" />
      </div>
    </>
  );
}

export default CartSummaryModal;
