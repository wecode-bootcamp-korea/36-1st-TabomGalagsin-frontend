import React, { useState } from 'react';
import { API } from '../../../config';
import { appendComma } from '../../../utils.js';
import './CartProduct.scss';

function CartProduct({
  productName,
  imageURL,
  color,
  size,
  price,
  onRemove,
  setSummaryPrice,
  productListData,
  orderItemsId,
  stocks,
  quantity,
  setCartedCount,
}) {
  const [stock, setStock] = useState(quantity);
  const [productPrice, setProductPrice] = useState(Number(price * quantity));
  const [userToken] = useState(localStorage.getItem('token'));

  return (
    <div className="cartProduct">
      <div className="productImage">
        <img src={imageURL} alt="product" />
      </div>
      <div className="productInfo">
        <div className="productHeader">
          <p className="productName">{productName}</p>
          <button
            className="productDeleteButton flipflopCursor"
            onClick={() => {
              onRemove(orderItemsId);
              productListData &&
                setSummaryPrice(lastSummary => lastSummary - price * quantity);
              fetch(`${API.CART}/${orderItemsId}`, {
                method: 'DELETE',
                headers: {
                  authorization: userToken,
                },
              });
              setCartedCount(prev => Number(prev) - 1);
              localStorage.setItem(
                'totalProduct',
                Number(localStorage.getItem('totalProduct')) - 1
              );
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
              className="quantityMinus flipflopCursor"
              onClick={() => {
                setStock(prev => prev - 1);
                fetch(`${API.CART}/${orderItemsId}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'Application/json',
                    authorization: userToken,
                  },
                  body: JSON.stringify({
                    quantity: stock - 1,
                  }),
                });

                setSummaryPrice(prev => Number(prev) - Number(price));
                setProductPrice(prev => Number(prev) - Number(price));
              }}
              disabled={stock === 1}
            >
              {' '}
              -{' '}
            </button>
            <span className="productQuantity">{stock}</span>
            <button
              className="quantityPlus flipflopCursor"
              onClick={() => {
                setStock(prev => prev + 1);
                fetch(`${API.CART}/${orderItemsId}`, {
                  method: 'PATCH',
                  headers: {
                    'Content-Type': 'Application/json',
                    authorization: userToken,
                  },
                  body: JSON.stringify({
                    quantity: stock + 1,
                  }),
                });
                setSummaryPrice(prev => Number(prev) + Number(price));
                setProductPrice(prev => Number(prev) + Number(price));
              }}
              disabled={stock === stocks}
            >
              {' '}
              +{' '}
            </button>
          </div>
          <div className="productPrice">
            ₩ {appendComma(Number(productPrice))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
