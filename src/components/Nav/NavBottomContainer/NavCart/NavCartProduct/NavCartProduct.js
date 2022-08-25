import React, { useState } from 'react';
import { API } from '../../../../../config';
import { appendComma } from '../../../../../utils.js';
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
  const [userToken] = useState(localStorage.getItem('token'));

  const setQuantity = MOP => {
    setThisQuantity(prev => prev + MOP);
    fetch(`${API.CART}/${orderItemsId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'Application/json',
        authorization: userToken,
      },
      body: JSON.stringify({
        quantity: thisQuantity + MOP,
      }),
    });
    setProductPrice(prev => Number(prev) + Number(price) * MOP);
    setSummaryPrice(prev => Number(prev) + Number(price) * MOP);
  };

  const setDelete = () => {
    onRemove(orderItemsId);
    cartedProduct &&
      setSummaryPrice(lastSummary => lastSummary - price * quantity);
    fetch(`${API.CART}/${orderItemsId}`, {
      method: 'DELETE',
      headers: {
        authorization: userToken,
      },
    });
  };

  return (
    <div className="navCartProduct">
      <div className="productImage">
        <img className="productImageSrc" src={imgUrl} alt="product" />
      </div>
      <div className="productInfo">
        <div className="productHeader">
          <p className="productName">{productName}</p>
          <button className="productDelete" onClick={() => setDelete()}>
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
              onClick={() => setQuantity(-1)}
              disabled={thisQuantity === 1}
            >
              -
            </button>
            <span className="productQuantity">{thisQuantity}</span>
            <button
              className="quantityPlus"
              onClick={() => setQuantity(1)}
              disabled={thisQuantity === stocks}
            >
              +
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

export default NavCartProduct;