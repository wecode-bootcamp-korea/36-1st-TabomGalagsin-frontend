import React, { useState } from 'react';
import { API } from '../../../../../config';
import './NavCartProduct.scss';

function NavCartProduct({
  productName,
  imgUrl,
  color,
  size,
  price,
  orderItemsId,
  onRemove,
  setSummaryPrice,
  cartedProduct,
  stocks,
  quantity,
}) {
  const [thisQuantity, setThisQuantity] = useState(quantity);
  const [productPrice, setProductPrice] = useState(Number(price * quantity));

  return (
    <div className="navCartProduct">
      <div className="productImage">
        <img className="productImageSrc" src={imgUrl} alt="product" />
      </div>
      <div className="productInfo">
        <div className="productHeader">
          <p className="productName">{productName}</p>
          <button
            className="productDelete"
            onClick={() => {
              onRemove(orderItemsId);
              cartedProduct &&
                setSummaryPrice(lastSummary => lastSummary - price * quantity);
              fetch(`${API.CART}/${orderItemsId}`, {
                method: 'DELETE',
                headers: {
                  authorization:
                    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
                },
              });
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/13/13514.png"
              alt="deletButton"
            />
          </button>
        </div>
        <p className="productColor">색상 : {color}</p>
        <p className="productSize">사이즈 : {size}</p>
        <div className="productFooter">
          <div className="productQuantityControlContainer">
            <button
              className="quantityMinus"
              onClick={() => {
                setThisQuantity(prev => prev - 1);
                fetch(`${API.CART}/${orderItemsId}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'Application/json',
                    authorization:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
                  },
                  body: JSON.stringify({
                    quantity: thisQuantity - 1,
                  }),
                });
                setProductPrice(prev => Number(prev) - Number(price));
                setSummaryPrice(prev => Number(prev) - Number(price));
              }}
              disabled={thisQuantity === 1}
            >
              {' '}
              -{' '}
            </button>
            <span className="productQuantity">{thisQuantity}</span>
            <button
              className="quantityPlus"
              onClick={() => {
                setThisQuantity(prev => prev + 1);
                fetch(`${API.CART}/${orderItemsId}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'Application/json',
                    authorization:
                      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
                  },
                  body: JSON.stringify({
                    quantity: thisQuantity + 1,
                  }),
                });
                setProductPrice(prev => Number(prev) + Number(price));
                setSummaryPrice(prev => Number(prev) + Number(price));
              }}
              disabled={thisQuantity === stocks}
            >
              {' '}
              +{' '}
            </button>
          </div>
          <div className="productPrice">
            ₩{' '}
            {Number(productPrice)
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavCartProduct;
