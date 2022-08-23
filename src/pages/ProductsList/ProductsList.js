import { useEffect, useState } from 'react';
import Product from '../../components/Product/Product.js';
import { API } from '../../config.js';
import FilterMenu from './FilterMenu/FilterMenu.js';
import './ProductsList.scss';

function ProductsList() {
  const [productsList, setProductsList] = useState();

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

  console.log(productsList);

  return (
    <div className="productsList">
      <div className="productsListContainer">
        <div className="listNav">
          <div className="breadCrumps">빵</div>
          <div className="orderContainer">order</div>
        </div>

        <main className="productsContainer">
          <aside className="filterAside">
            {MENU_LIST.map(({ title, list }) => {
              return <FilterMenu key={title} title={title} list={list} />;
            })}
          </aside>
          <section className="listContainer">
            {productsList &&
              productsList.map(product => {
                const { productId, name, price, thumbnailUrl, color, size } =
                  product;
                return (
                  <Product
                    key={productId}
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
    </div>
  );
}

export default ProductsList;

const MENU_LIST = [
  { title: '그림 물감', list: ['노란색', '푸른', '베이지', '하얀색', 'ㅇㅇ'] },
  { title: '느낌', list: ['좋음', '나쁨', '적당'] },
  {
    title: '사이즈',
    list: ['Free(Man)', 'Free(Woman)', 'One'],
  },
];

const ProductComponents = [
  { title: 'title 1', img: 'img 1' },
  { title: 'title 2', img: 'img 2' },
  { title: 'title 3', img: 'img 3' },
  { title: 'title 4', img: 'img 4' },
  { title: 'title 5', img: 'img 5' },
  { title: 'title 6', img: 'img 6' },
];
