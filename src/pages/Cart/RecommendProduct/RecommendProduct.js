import React from 'react';
import { appendComma } from '../../../function';
import './RecommendProduct.scss';

function RecommendProduct({ URL, productName, price }) {
  return (
    <div className="recommendProduct">
      <div className="recommendProductImage">
        <img src={URL} alt="productImage" />
      </div>
      <div className="recommendProductInfo">
        <p className="recommendProductName">{productName}</p>
        <p className="recommendProductPrice">₩ {appendComma(Number(price))}</p>
      </div>
    </div>
  );
}

export default RecommendProduct;
