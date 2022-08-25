import { useNavigate } from 'react-router-dom';
import { goToUrl } from '../../../utils.js';
import Product from '../../../components/Product/Product';
import './RecommendProducts.scss';

function RecommendProducts({ productsList, title, setCartedCount }) {
  const navigate = useNavigate();

  return (
    <div className="recommendProducts">
      <div className="header">
        <h1 className="title">{title}</h1>
        <button
          className="linkButton"
          onClick={() => goToUrl(navigate, '/categories/1/type/1')}
        >
          <span>더 많은 제품 보기</span>
          <i className="fa-solid fa-angle-right fa-lg" />
        </button>
      </div>
      <div className="carouselContainer">
        {productsList &&
          productsList.map((product, idx) => {
            const { productId, name, price, thumbnailUrl, color, size } =
              product;
            return (
              <Product
                key={productId}
                setCartedCount={setCartedCount}
                productName={name}
                productId={productId}
                dataArrIdx={idx}
                price={price}
                imgUrl={thumbnailUrl}
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
