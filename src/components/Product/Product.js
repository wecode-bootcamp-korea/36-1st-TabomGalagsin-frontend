import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goTo } from '../../function';
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

  const [selectColor, setSelectColor] = useState({
    isSelected: false,
    imgUrl: '',
  });
  const navigate = useNavigate();

  const handleClickButton = e => {
    const { name, value } = e.target;
    clickedInfo[name] === name
      ? setClickedInfo({ ...clickedInfo, [name]: '' })
      : setClickedInfo({ ...clickedInfo, [name]: value });

    if (name === 'color') {
      setSelectColor({
        isSelected: true,
        imgUrl: colorList.filter(colorInfo => colorInfo.color === value)[0]
          .thumbnailUrl,
      });
    }
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
      <div
        onClick={() => goTo(navigate, `/products/${productId}`)}
        className="linkComponent"
      >
        <img
          alt="product"
          src={selectColor.isSelected ? selectColor.imgUrl : imgUrl}
        />
      </div>
      <div
        onClick={() => goTo(navigate, `/products/${productId}`)}
        className="linkComponent"
      >
        <p className="description">{productName}</p>
      </div>
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
