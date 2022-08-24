import React from 'react';
import { API } from '../../../config.js';
import { useNavigate } from 'react-router-dom';
import './CartSummaryModal.scss';

function CartSummaryModal({ productListData, summaryPrice }) {
  const navigate = useNavigate();
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
          <div className="modalCurrentCredit">보유 크레딧 : {}</div>
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
                            상품 가격 : ₩{' '}
                            {Number(price)
                              .toString()
                              .replace(
                                /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
                                ','
                              )}{' '}
                          </div>
                          <div className="productTextQuantity">
                            구입 수량 : {quantity}
                          </div>
                        </div>
                        <div className="productTextTotalPrice">
                          품목 별 금액 : ₩{' '}
                          {Number(price * quantity)
                            .toString()
                            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                        </div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div className="modalTotalPrice">
            전체 합산 금액 : ₩
            {Number(summaryPrice)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </div>
          <div className="modalTotalResult">결제 후 잔액 : {}</div>
        </div>
        <div className="modalBottom" />
      </div>
    </>
  );
}

export default CartSummaryModal;
