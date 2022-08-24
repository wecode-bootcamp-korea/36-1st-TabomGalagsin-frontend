import React from 'react';
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
            fetch('http://10.58.0.234:3000/orders/payment', {
              method: 'POST',
              headers: {
                'Content-Type': 'Application/json',
                authorization:
                  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiZW1haWwiOiJkZ2hnaEBza3MiLCJpYXQiOjE2NjEzMzE4MTV9.hAPDunWv2r37tJc5DfBxy1u9tRLLjEWyS6BhimsQVsg',
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
