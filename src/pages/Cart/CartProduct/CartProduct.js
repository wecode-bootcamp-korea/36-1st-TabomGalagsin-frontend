import React, { useState } from 'react';
import './CartProduct.scss';

function CartProduct({
  productName,
  id,
  imageURL,
  color,
  size,
  price,
  onRemove,
  setSummaryPrice,
  productListData,
}) {
  const [stock, setStock] = useState(1);

  const stockButton = evnet => {
    evnet.target.className === 'quantityMinus'
      ? setStock(stock - 1)
      : setStock(stock + 1);
  };
  return (
    <div className="cartProduct">
      <div className="productImage">
        <img src={imageURL} alt="product" />
      </div>
      <div className="productInfo">
        <div className="productHeader">
          <p className="productName">{productName}</p>
          <button
            className="productDelete"
            onClick={() => {
              onRemove(id);
              productListData &&
                setSummaryPrice(lastSummary => lastSummary - price);
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
            <button className="quantityMinus" onClick={stockButton}>
              {' '}
              -{' '}
            </button>
            <span className="productQuantity">{stock}</span>
            <button className="quantityPlus" onClick={stockButton}>
              {' '}
              +{' '}
            </button>
          </div>
          <div className="productPrice">BRL {price}</div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
