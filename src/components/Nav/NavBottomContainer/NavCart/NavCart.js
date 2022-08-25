import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../../../config.js';
import { appendComma, goToUrl } from '../../../../utils.js';
import NavCartProduct from '../NavCart/NavCartProduct/NavCartProduct.js';
import './NavCart.scss';

function NavCart({ onMouse, setCartedCount }) {
  const navigate = useNavigate();
  const [userToken] = useState(localStorage.getItem('token'));
  const [summaryPrice, setSummaryPrice] = useState(0);
  const [productListData, setProductListData] = useState([]);

  const onRemove = id => {
    setProductListData(
      productListData.filter(data => data.orderItemsId !== id)
    );
  };

  useEffect(() => {
    fetch(`${API.CART}`, {
      headers: {
        authorization: userToken,
      },
    })
      .then(response => response.json())
      .then(res => {
        setProductListData(res.cart);
        if (!!res.cart) {
          setSummaryPrice(
            res.cart.reduce(
              (acc, cur) => (acc += Number(cur.price * cur.quantity)),
              0
            )
          );
        }
      });
  }, [userToken]);

  return (
    <div className="navCart">
      <div className="cartSummary">
        <div className="cartSummaryHeader">장바구니</div>
        <div className="cartSummaryProducts">
          {productListData &&
            productListData.map(
              ({
                productName,
                thumbnailUrl,
                color,
                size,
                price,
                orderItemsId,
                stock,
                quantity,
              }) => {
                return (
                  <NavCartProduct
                    key={orderItemsId}
                    setCartedCount={setCartedCount}
                    orderItemsId={orderItemsId}
                    productName={productName}
                    imgUrl={thumbnailUrl}
                    color={color}
                    size={size}
                    price={price}
                    stocks={stock}
                    onRemove={onRemove}
                    setSummaryPrice={setSummaryPrice}
                    cartedProduct={productListData}
                    quantity={quantity}
                  />
                );
              }
            )}
        </div>
      </div>
      <div className="cartResult">
        <div className="cartResultTextContainer">
          <div className="cartResultText">총 금액</div>
          <div className="cartResultPrice">
            ₩
            {typeof summaryPrice !== 'number'
              ? ' 0'
              : appendComma(Number(summaryPrice))}
          </div>
        </div>
        <button
          onClick={() => {
            if (localStorage.getItem('token')) {
              if (productListData.length === 0) {
                alert('장바구니 비어있어요 ♥️♥️♥️');
              } else {
                goToUrl(navigate, '/cart');
              }
            } else {
              alert('비회원은 이용할 수 없는 기능입니다.');
            }
          }}
          className="cartResultSubmit"
        >
          구매하기
        </button>
      </div>
    </div>
  );
}

export default NavCart;
