import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from '../../config.js';
import { goToUrl } from '../../utils.js';
import Product from '../../components/Product/Product.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import Footer from '../../components/Footer/Footer.js';
import Nav from '../../components/Nav/Nav.js';
import './ProductsList.scss';

function ProductsList() {
  const navigate = useNavigate();
  const [productsList, setProductsList] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(ORDER_LIST[0]);
  const [isOpenedOrder, setIsOpenedOrder] = useState(false);

  const { categoryId, typeId } = useParams();

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
    const uri = `${API.MAIN}/categories/${categoryId}/${CATEGORY_ID_MAP[categoryId]}/${typeId}`;
    fetchData(uri, options, setProductsList);
  }, [categoryId, typeId]);

  const handleChange = e => {
    const { value, dataset } = e.target;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    setSelectedOrder(value);
    const uri = `${API.MAIN}/categories/${categoryId}/${CATEGORY_ID_MAP[categoryId]}/${typeId}`;
    fetchData(
      `${uri}?ordering=${dataset.querystring}`,
      options,
      setProductsList
    );

    document
      .querySelectorAll(`input[type=checkbox]`)
      .forEach(el => (el.checked = false));
  };

  const handleChangeFilter = e => {
    const { value, dataset } = e.target;
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    let uri = `${API.MAIN}/categories/${categoryId}/${CATEGORY_ID_MAP[categoryId]}/${typeId}`;
    const [priceMin, priceMax] = value.split('~');

    if (dataset.filtertype === '가격') {
      uri += `?pricemin=${priceMin}&pricemax=${priceMax || 999999}`;
    } else if (dataset.filtertype === '테마') {
      uri += `?theme=${value}`;
    }

    fetchData(uri, options, setProductsList);
  };

  return (
    <>
      <Nav />
      <div className="productsList">
        <div className="productsListContainer">
          <div className="listNav">
            <div className="productNavigation">
              <div onClick={() => goToUrl(navigate, '/')} className="link">
                Main page
              </div>
              <span>&gt;</span>
              <div
                onClick={() =>
                  goToUrl(
                    navigate,
                    categoryId === '1'
                      ? `/categories/${categoryId}/type/${typeId}`
                      : `/categories/${categoryId}/color/${typeId}`
                  )
                }
                className="link bold"
              >
                <span className="bold">
                  {categoryId === '1' ? '카테고리 별' : '색상 별'}
                </span>
              </div>
            </div>
            <div className="orderContainer">
              <span className="orderSpan bold">순서</span>
              <span
                className="orderBtn"
                onClick={() => setIsOpenedOrder(prev => !prev)}
              >
                {selectedOrder}
                <i className="fa-solid fa-chevron-down" />
              </span>
              {isOpenedOrder && (
                <div
                  className={`orderSelector ${
                    isOpenedOrder ? 'openedOrder' : 'closedOrder'
                  }`}
                  onMouseLeave={() => setIsOpenedOrder(false)}
                >
                  <div className="selectorHeader">
                    <div className="orderTitle">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3193/3193845.png"
                        alt="arrow"
                      />
                      <span>{selectedOrder}</span>
                    </div>
                    <div
                      className="cancelButton"
                      onClick={() => setIsOpenedOrder(prev => !prev)}
                    >
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

          <main
            className="productsContainer"
            style={{
              height: `${Math.ceil(productsList.length / 3) * 320}px`,
            }}
          >
            <aside className="filterAside">
              {MENU_LIST.map(({ title, list }) => {
                return (
                  <FilterMenu
                    key={title}
                    handleChangeFilter={handleChangeFilter}
                    title={title}
                    list={list}
                  />
                );
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
                      productId={productId}
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
        <Footer backgroudColor="#ffc3d4" />
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
  { title: '가격', list: ['0~29999', '30000~59999', '60000~'] },
  {
    title: '테마',
    list: ['Beach', 'Daily', 'Activity'],
  },
];

const CATEGORY_ID_MAP = ['', 'type', 'color'];
