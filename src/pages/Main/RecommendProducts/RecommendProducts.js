import { useEffect, useState } from 'react';
import Product from '../../../components/Product/Product';

import './RecommendProducts.scss';

function RecommendProducts() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/releaseProducts.json');

        if (!response.ok) {
          throw new Error('서버가 이상합니다.');
        }

        const data = await response.json();
        setProductsList(data);
      } catch (error) {
        throw new Error(`에러가 발생했습니다. ${error.message}`);
      }
    };

    fetchData();
  }, []);

  console.log(productsList);

  return (
    <div className="recommendProducts">
      <div className="header">
        <h1 className="title">Release</h1>
        <button className="linkButton">
          <span>더 많은 제품 보기</span>
          <i className="fa-solid fa-angle-right fa-lg" />
        </button>
      </div>
      <div className="carouselContainer">
        {productsList.map(product => {
          const { productId, Desc, price, imageUrl, color, size } = product;
          return (
            <Product
              key={productId}
              description={Desc}
              price={price}
              imgUrl={imageUrl}
              colorList={color}
              sizeList={size}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RecommendProducts;