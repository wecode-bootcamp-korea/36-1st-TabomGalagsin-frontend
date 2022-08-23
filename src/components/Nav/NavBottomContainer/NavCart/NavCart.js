import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavCartProduct from '../NavCart/NavCartProduct/NavCartProduct.js';
import './NavCart.scss';

function NavCart({ onMouse }) {
  const navigate = useNavigate();
  const [productListData, setProductListData] = useState(productListDataPast);
  const [summaryPrice, setSummaryPrice] = useState(
    productListData.reduce((acc, cur) => (acc += cur.price), 0)
  );
  const onRemove = id => {
    setProductListData(productListData.filter(data => data.id !== id));
  };

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
              ({ productName, imageURL, color, size, price, id }) => {
                return (
                  <NavCartProduct
                    key={id}
                    id={id}
                    productName={productName}
                    imageURL={imageURL}
                    color={color}
                    size={size}
                    price={price}
                    onRemove={onRemove}
                    setSummaryPrice={setSummaryPrice}
                    productListData={productListData}
                  />
                );
              }
            )}
        </div>
      </div>
      <div className="cartResult">
        <div className="cartResultTextContainer">
          <div className="cartResultText">총 금액</div>
          <div className="cartResultPrice">BRL 220.0</div>
        </div>
        <button className="cartResultSubmit" onClick={() => navigate('/cart')}>
          구매하기
        </button>
      </div>
    </div>
  );
}

export default NavCart;

const productListDataPast = [
  {
    id: 1,
    productName: 'Havainas Farm Brogodo Ring',
    color: '블랙',
    imageURL:
      'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    size: 'Free(Man)',
    price: 210.0,
  },
  {
    id: 2,
    productName: 'Havainas Farm Brogodo Flipflop',
    color: '화이트',
    imageURL:
      'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    size: 'Free(Man)',
    price: 222.0,
  },
  {
    id: 3,
    productName: 'Havainas Farm Brogodo Shirt',
    color: '블루',
    imageURL:
      'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    size: 'Free(Man)',
    price: 219.0,
  },
];
