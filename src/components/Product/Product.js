import { useState } from 'react';
import './Product.scss';

function Product({ description, price, imgUrl, colorList, sizeList }) {
  const [clickedColor, setClickedColor] = useState();
  const [clickedSize, setClickedSize] = useState();

  const handleClickColorButton = e => {
    const { name } = e.target;
    clickedColor === name ? setClickedColor(!name) : setClickedColor(name);
  };
  const handleClickSizeButton = e => {
    const { name } = e.target;
    clickedSize === name ? setClickedSize(!name) : setClickedSize(name);
  };

  const isClickedAll = !!clickedColor && !!clickedSize;

  return (
    <div className="product">
      <img alt="product" src={imgUrl} />
      <p className="description">{description}</p>
      <p className="price">KRW {price}</p>
      <div className="colorPickers">
        {Object.values(colorList).map(color => {
          return (
            <button
              key={color}
              name={color}
              onClick={handleClickColorButton}
              className={color === clickedColor ? 'active' : ''}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
      <div className="sizePickers">
        {Object.values(sizeList).map(size => {
          size = size === 'null' ? '하나의' : size;
          return (
            <div key={size}>
              <button
                name={size}
                onClick={handleClickSizeButton}
                className={size === clickedSize ? 'active' : ''}
              >
                {size}
              </button>
            </div>
          );
        })}
      </div>
      <button
        disabled={!isClickedAll}
        className={`cartBtn ${isClickedAll ? 'enabledBtn' : ''}`}
      >
        장바구니에 담기
      </button>
    </div>
  );
}

export default Product;
