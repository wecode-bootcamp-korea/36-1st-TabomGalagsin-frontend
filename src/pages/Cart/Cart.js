import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartProduct from './CartProduct/CartProduct';
import CartSlideState from './CartSlideState/CartSlideState';
import RecommendProduct from './RecommendProduct/RecommendProduct.js';
import Nav from '../../components/Nav/Nav.js';
import CartFooter from '../Cart/CartFooter/CartFooter.js';
import './Cart.scss';

function Cart() {
  const navigate = useNavigate();
  const goToMainFunction = () => navigate('/');
  const recommendProducts = [
    ...recommendProductsPast,
    ...recommendProductsPast,
    ...recommendProductsPast,
  ];
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [trasitionSec, setTransitionSec] = useState(0.3);
  const [productListData, setProductListData] = useState(productListDataPast);
  const [summaryPrice, setSummaryPrice] = useState(
    productListData.reduce((acc, cur) => (acc += cur.price), 0)
  );
  useEffect(() => {
    setProductListData(productListDataPast);
  }, []);

  const clickButton = event => {
    if (
      event.target.className === 'previous' ||
      event.target.className === 'fa-solid fa-chevron-left fa-xl'
    ) {
      if (currentIndex < -1) {
        setTransitionSec(0);
        setCurrentIndex(2);
        setTimeout(() => {
          setTransitionSec(0.3);
          setCurrentIndex(prev => prev - 1);
        }, 0);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    } else {
      if (currentIndex > 1) {
        setTransitionSec(0);
        setCurrentIndex(-2);
        setTimeout(() => {
          setTransitionSec(0.3);
          setCurrentIndex(prev => prev + 1);
        }, 0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
  };

  const onRemove = id => {
    setProductListData(productListData.filter(data => data.id !== id));
  };

  return (
    <>
      <Nav />
      <main className="cart">
        <article className="cartMain">
          <section className="cartProductslist">
            <header className="cartBreadScrum">
              <span className="goToMain" onClick={goToMainFunction}>
                메인
              </span>
              <span className="cartBreadScrumPartition">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/6423/6423875.png"
                  alt="scrumImage"
                />
              </span>
              <span className="cartBreadScrumLast">장바구니</span>
            </header>
            {productListData &&
              productListData.map(
                ({ productName, imageURL, color, size, price, id }) => (
                  <CartProduct
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
                )
              )}
          </section>
          <aside className="cartAside">
            <section className="cartAsidePriceResult">
              <div className="priceTitle">주문 요약</div>
              <div className="productsPrice">
                <span className="summaryText">예상 총계</span>
                <span className="summaryPrice">BRL {summaryPrice}</span>
              </div>
            </section>
            <section className="cartAsideRecommend">
              <div className="recommendTitle">추천 상품</div>
              <div className="recommendProductsList">
                <div
                  className="recommendProductsWrap"
                  style={{
                    transform: `translateX(${
                      -1 * ((100 / 2) * currentIndex)
                    }%)`,
                    transition: `all ${trasitionSec}s`,
                  }}
                >
                  {recommendProducts.map((data, index) => (
                    <RecommendProduct
                      key={index}
                      URL={data.URL}
                      productName={data.productName}
                      price={data.price}
                    />
                  ))}
                </div>
              </div>
              <div className="recommendSlideContainer">
                <button className="previous" onClick={clickButton}>
                  <i className="fa-solid fa-chevron-left fa-xl" />
                </button>
                <ul className="cartSlideStateContainer">
                  {recommendProductsPast.map((_, index) => {
                    return (
                      <CartSlideState
                        key={index}
                        index={index}
                        stateNow={currentIndex + 1}
                      />
                    );
                  })}
                </ul>
                <button className="next" onClick={clickButton}>
                  <i className="fa-solid fa-chevron-right fa-xl" />
                </button>
              </div>
            </section>
            <section className="cartAsideBuyingSubmit">
              <button className="buyingSubmit">확인</button>
            </section>
          </aside>
        </article>
      </main>
      <CartFooter />
    </>
  );
}

export default Cart;

const recommendProductsPast = [
  {
    URL: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    productName: 'Havaianas Top Market Flipflop',
    price: 'BRL 149,99',
  },
  {
    URL: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    productName: 'Havaianas Top Market Flipflop',
    price: 'BRL 149,99',
  },
  {
    URL: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    productName: 'Havaianas Top Market Flipflop',
    price: 'BRL 149,99',
  },
  {
    URL: 'https://havaianas.com.br/dw/image/v2/BDDJ_PRD/on/demandware.static/-/Sites-havaianas-master/default/dwbdef45c6/product-images/4148315_0090_HAVAIANAS-FARM-BOROGODO_A.png?sw=90&sh=90',
    productName: 'Havaianas Top Market Flipflop',
    price: 'BRL 149,99',
  },
];

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
