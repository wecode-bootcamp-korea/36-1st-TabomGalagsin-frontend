import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { API } from '../../config.js';
import Product from '../../components/Product/Product.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import Footer from '../../components/Footer/Footer.js';
import Nav from '../../components/Nav/Nav.js';
import './ProductsList.scss';

function ProductsList() {
  const [productsList, setProductsList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(ORDER_LIST[0]);
  const [isOpenedOrder, setIsOpenedOrder] = useState(false);

  const backgroudColor = 'pink';

  const fetchData = async (uri, options, setState) => {
    try {
      const response = await fetch(uri, options);
      if (!response.ok) {
        throw new Error('서버가 이상합니다.');
      }
      const data = await response.json();
      setState(Object.values(data)[0]);
    } catch (error) {
      throw new Error(`에러가 발생했습니다. ${error.message}`);
    }
  };

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetchData(API.PRODUCTS, options, setProductsList);
  }, []);

  const handleChange = e => {
    const { value, dataset } = e.target;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setSelectedOrder(value);
    fetchData(
      `${API.ORDERING}?ordering=${dataset.querystring}`,
      options,
      setProductsList
    );
  };

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
                <i className="fa-solid fa-chevron-down" />
              </span>
              {isOpenedOrder && (
                <div
                  className={`orderSelector ${
                    isOpenedOrder ? 'openedOrder' : 'closedOrder'
                  }`}
                >
                  <div className="selectorHeader">
                    <div className="orderTitle">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3193/3193845.png"
                        alt="arrow"
                      />
                      <span>{selectedOrder}</span>
                    </div>
                    <div>
                      <i className="fa-solid fa-x fa-xs" />
                    </div>
                  </div>
                  <ul className="radioSelector">
                    {ORDER_LIST.map((title, idx) => {
                      return (
                        <li key={title}>
                          <input
                            type="radio"
                            name="order"
                            value={title}
                            data-querystring={ORDER_QUERY_STRINGS[idx]}
                            checked={selectedOrder === title}
                            onChange={handleChange}
                          />
                          {title}
                        </li>
                      );
                    })}
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
              {productsList.length > 0 &&
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

const ORDER_LIST = [
  '최신 상품 순',
  '오래된 상품 순',
  '낮은 가격 순',
  '높은 가격 순',
];
const ORDER_QUERY_STRINGS = ['created_at', '-created_at', 'price', '-price'];

const MENU_LIST = [
  { title: '그림 물감', list: ['노란색', '푸른', '베이지', '하얀색', 'ㅇㅇ'] },
  { title: '느낌', list: ['좋음', '나쁨', '적당'] },
  {
    title: '사이즈',
    list: ['Free(Man)', 'Free(Woman)', 'One'],
  },
];
