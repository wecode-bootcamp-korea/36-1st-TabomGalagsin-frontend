import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

function Product({
  productId,
  dataArrIdx,
  productName,
  price,
  imgUrl,
  colorList,
  sizeList,
}) {
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
  const colIndexOfCard = dataArrIdx % 3;
  const rowIndexOfCard = Math.floor(dataArrIdx / 3);

  const priceWithComma = price
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div
      className={`product product_col${colIndexOfCard}_row${rowIndexOfCard}`}
    >
      <Link to={`/products/${productId}`} className="linkComponent">
        <img alt="product" src={imgUrl} />
      </Link>
      <Link to={`/products/${productId}`} className="linkComponent">
        <p className="description">{productName}</p>
      </Link>
      <p className="price">KRW {priceWithComma}</p>
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
