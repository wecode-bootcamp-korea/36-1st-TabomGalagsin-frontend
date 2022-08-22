import { useState } from 'react';
import './Product.scss';

function Product({ productName, price, imgUrl, colorList, sizeList }) {
  const [clickedInfo, setClickedInfo] = useState({
    color: '',
    size: '',
  });

  const handleClickButton = e => {
    const { name, value } = e.target;
    clickedInfo[name] === name
      ? setClickedInfo({ ...clickedInfo, [name]: '' })
      : setClickedInfo({ ...clickedInfo, [name]: value });
  };

  const isClickedAll = !!clickedInfo.color && !!clickedInfo.size;

  return (
    <div className="product">
      <img alt="product" src={imgUrl} />
      <p className="description">{productName}</p>
      <p className="price">KRW {price}</p>
      <div className="colorPickers">
        {colorList.map(({ color }) => {
          return (
            <button
              key={color}
              value={color}
              name="color"
              onClick={handleClickButton}
              className={color === clickedInfo.color ? 'active' : ''}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
      <div className="sizePickers">
        {sizeList.map(({ size }) => {
          // size = size === 'null' ? '하나의' : size;
          return (
            <button
              key={size}
              value={size}
              name="size"
              onClick={handleClickButton}
              className={size === clickedInfo.size ? 'active' : ''}
            >
              {size}
            </button>
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
