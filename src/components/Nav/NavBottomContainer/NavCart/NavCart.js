import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../../../config.js';
import { appendComma } from '../../../../utils.js';
import NavCartProduct from '../NavCart/NavCartProduct/NavCartProduct.js';
import './NavCart.scss';

function NavCart({ onMouse }) {
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
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
      },
    })
      .then(response => response.json())
      .then(res => {
        setProductListData(res.cart);
        setSummaryPrice(
          res.cart.reduce(
            (acc, cur) => (acc += Number(cur.price * cur.quantity)),
            0
          )
        );
      });
  }, []);

  return (
    <div
      className="navCart"
      onMouseLeave={() => onMouse(false)}
      onMouseOver={() => onMouse(true)}
    >
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
        <Link to={`${!!productListData ? '/cart' : '/'}`}>
          <button className="cartResultSubmit">구매하기</button>
        </Link>
      </div>
    </div>
  );
}

export default NavCart;
