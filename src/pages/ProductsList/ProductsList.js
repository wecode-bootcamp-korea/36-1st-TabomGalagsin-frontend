import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config.js';
import Product from '../../components/Product/Product.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import Footer from '../../components/Footer/Footer.js';
import './ProductsList.scss';
import Nav from '../../components/Nav/Nav.js';

function ProductsList() {
  const [productsList, setProductsList] = useState();
  const [selectedOrder, setSelectedOrder] = useState('');
  const [isOpenedOrder, setIsOpenedOrder] = useState(false);

  const backgroudColor = 'brown';

  useEffect(() => {
    const fetchData = async (uri, setState) => {
      try {
        const response = await fetch(uri, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('서버가 이상합니다.');
        }
        const data = await response.json();
        setState(Object.values(data)[0]);
      } catch (error) {
        throw new Error(`에러가 발생했습니다. ${error.message}`);
      }
    };

    fetchData(API.PRODUCTS, setProductsList);
  }, []);

  const openedClassName = isOpenedOrder ? 'openedOrder' : 'closedOrder';
  const handleChange = e => setSelectedOrder(e.target.value);

  return (
    <>
      <Nav />
      <div className="productsList">
        <div className="productsListContainer">
          <div className="listNav">
            <div className="productNavigation">
              <Link to="/" className="link">
                Main page
              </Link>
              <span>&gt;</span>
              <Link to="/" className="link bold">
                <span className="bold">카테고리 넣을 곳 </span>
              </Link>
            </div>
            <div className="orderContainer">
              <span className="bold">순서</span>
              <span
                className="orderBtn"
                onClick={() => setIsOpenedOrder(prev => !prev)}
              >
                릴리스
                <i class="fa-solid fa-chevron-down" />
              </span>
              {isOpenedOrder && (
                <div className={`orderSelector ${openedClassName}`}>
                  <div className="selectorHeader">
                    <div className="orderTitle">
                      <img
                        src="https://cdn-icons.flaticon.com/png/512/2990/premium/2990154.png?token=exp=1661263573~hmac=095b0df3617a8bf88c3105d546a558eb"
                        alt="arrow"
                      />
                      <span>{selectedOrder}</span>
                    </div>
                    <div className="x">
                      <i class="fa-solid fa-x fa-xs" />
                    </div>
                  </div>
                  <ul className="radioSelector">
                    <li>
                      <input
                        type="radio"
                        name="order"
                        value="릴리스"
                        checked={selectedOrder === '릴리스'}
                        onChange={handleChange}
                      />
                      릴리스
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="order"
                        value="가격순"
                        checked={selectedOrder === '가격순'}
                        onChange={handleChange}
                      />
                      가격순
                    </li>
                    <li>
                      <input
                        type="radio"
                        name="order"
                        value="가격역순"
                        checked={selectedOrder === '가격역순'}
                        onChange={handleChange}
                      />
                      가격역순
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <main className="productsContainer">
            <aside className="filterAside">
              {MENU_LIST.map(({ title, list }) => {
                return <FilterMenu key={title} title={title} list={list} />;
              })}
            </aside>
            <section className="listContainer">
              {productsList &&
                productsList.map((product, idx) => {
                  const { productId, name, price, thumbnailUrl, color, size } =
                    product;
                  return (
                    <Product
                      key={productId}
                      dataArrIdx={idx}
                      productName={name}
                      price={price}
                      imgUrl={thumbnailUrl}
                      colorList={color}
                      sizeList={size}
                    />
                  );
                })}
            </section>
          </main>
        </div>
        <Footer backgroudColor={backgroudColor} />
      </div>
    </>
  );
}

export default ProductsList;

const ORDER_LIST = ['릴리스', '가격 순', '가격 역순'];

const MENU_LIST = [
  { title: '그림 물감', list: ['노란색', '푸른', '베이지', '하얀색', 'ㅇㅇ'] },
  { title: '느낌', list: ['좋음', '나쁨', '적당'] },
  {
    title: '사이즈',
    list: ['Free(Man)', 'Free(Woman)', 'One'],
  },
];
