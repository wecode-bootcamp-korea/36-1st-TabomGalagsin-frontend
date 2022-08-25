import React from 'react';
import { useNavigate } from 'react-router-dom';
import { appendComma, goToUrl } from '../../../utils';
import './RecommendProduct.scss';

function RecommendProduct({ URL, productName, price, productId }) {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => goToUrl(navigate, `/products/${productId}`)}
      className="recommendProduct"
    >
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
