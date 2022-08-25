import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config';
import { appendComma } from '../../utils';
import CartProduct from './CartProduct/CartProduct';
import CartSlideState from './CartSlideState/CartSlideState';
import RecommendProduct from './RecommendProduct/RecommendProduct.js';
import Nav from '../../components/Nav/Nav.js';
import CartFooter from '../Cart/CartFooter/CartFooter.js';
import CartSummaryModal from './CartSummaryModal/CartSummaryModal';
import './Cart.scss';

function Cart() {
  const navigate = useNavigate();
  const goToMainFunction = () => navigate('/');
  const [paymentModal, setPaymentModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [trasitionSec, setTransitionSec] = useState(0.3);
  const [productListData, setProductListData] = useState([]);
  const [cartRecommeded, setCartRecommeded] = useState([]);
  const [summaryPrice, setSummaryPrice] = useState(
    productListData.reduce((acc, cur) => (acc += cur.price), 0)
  );
  const [userToken] = useState(localStorage.getItem('token'));
  const [cartedCount, setCartedCount] = useState(
    localStorage.getItem('totalProduct')
  );

  useEffect(() => {
    fetch(`${API.CART}`, {
      headers: {
        authorization: userToken,
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
  }, [userToken]);

  useEffect(() => {
    fetch(`${API.RECOMMEND}`, {
      headers: {
        authorization: userToken,
      },
    })
      .then(response => response.json())
      .then(res => {
        setCartRecommeded(res.recommendProduct);
      });
  }, [userToken]);

  const recommendProducts = [
    ...cartRecommeded,
    ...cartRecommeded,
    ...cartRecommeded,
  ];
  const clickButton = event => {
    if (
      event.target.className === 'previous' ||
      event.target.className === 'fa-solid fa-chevron-left fa-xl'
    ) {
      if (currentIndex < 0) {
        setTransitionSec(0);
        setCurrentIndex(3);
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

  const onRemove = orderItemsId => {
    setProductListData(
      productListData.filter(data => data.orderItemsId !== orderItemsId)
    );
  };

  return (
    <div className="cart">
      {paymentModal && (
        <CartSummaryModal
          setCartedCount={setCartedCount}
          summaryPrice={summaryPrice}
        />
      )}
      <Nav
        cartedCount={cartedCount}
        setCartedCount={setCartedCount}
        cartedProduct={productListData}
      />
      <main className="cartContainer">
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
                ({
                  productName,
                  thumbnailUrl,
                  color,
                  size,
                  price,
                  orderItemsId,
                  stock,
                  quantity,
                }) => (
                  <CartProduct
                    key={orderItemsId}
                    setCartedCount={setCartedCount}
                    orderItemsId={orderItemsId}
                    productName={productName}
                    imageURL={thumbnailUrl}
                    color={color}
                    size={size}
                    price={price}
                    onRemove={onRemove}
                    setSummaryPrice={setSummaryPrice}
                    productListData={productListData}
                    stocks={stock}
                    quantity={quantity}
                  />
                )
              )}
          </section>
          <aside className="cartAside">
            <section className="cartAsidePriceResult">
              <div className="priceTitle">주문 요약</div>
              <div className="productsPrice">
                <span className="summaryText">예상 총계</span>
                <span className="summaryPrice">
                  ₩ {appendComma(summaryPrice)}
                </span>
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
                  {recommendProducts.map(
                    ({ name, thumbnailUrl, price, productId }, index) => (
                      <RecommendProduct
                        key={index}
                        productId={productId}
                        URL={thumbnailUrl}
                        productName={name}
                        price={price}
                      />
                    )
                  )}
                </div>
              </div>
              <div className="recommendSlideContainer">
                <button className="previous" onClick={clickButton}>
                  <i className="fa-solid fa-chevron-left fa-xl" />
                </button>
                <ul className="cartSlideStateContainer">
                  {cartRecommeded.map((_, index) => {
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
              <button
                className="buyingSubmit"
                onClick={() => {
                  setPaymentModal(true);
                }}
              >
                확인
              </button>
            </section>
          </aside>
        </article>
      </main>
      <CartFooter />
    </div>
  );
}

export default Cart;
