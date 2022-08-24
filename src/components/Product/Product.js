import { useState } from 'react';
import { API } from '../../config.js';
import './Product.scss';

function Product({
  productId,
  productName,
  price,
  imgUrl,
  colorList,
  sizeList,
}) {
  const [clickedInfo, setClickedInfo] = useState({
    color: '',
    colorId: 0,
    size: '',
    sizeId: 0,
  });

  const handleClickButton = e => {
    const { name, value } = e.target;
    const valueObj = JSON.parse(value);
    clickedInfo[name] === name
      ? setClickedInfo({ ...clickedInfo, [name]: '', [name + 'Id']: 0 })
      : setClickedInfo({
          ...clickedInfo,
          [name]: valueObj[name],
          [name + 'Id']: valueObj[name + 'Id'],
        });
  };
  const handleFetch = () => {
    fetch(`${API.CART}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiZW1haWwiOiJ0ZXN0QDEiLCJpYXQiOjE2NjEzMTg5MDR9.byKbkYPoP3KbJtxPA1txesXuppi3AbJXHqTr2ptmJQc',
      },
      body: JSON.stringify({
        productId: productId,
        quantity: 1,
        sizeId: clickedInfo.sizeId,
        colorId: clickedInfo.colorId,
      }),
    });
    setClickedInfo(
      prev =>
        (prev = {
          color: '',
          colorId: 0,
          size: '',
          sizeId: 0,
        })
    );
  };

  const isClickedAll = !!clickedInfo.color && !!clickedInfo.size;

  return (
    <div className="product">
      <img alt="product" src={imgUrl} />
      <p className="description">{productName}</p>
      <p className="price">KRW {price}</p>
      <div className="colorPickers">
        {colorList.map(({ color, colorId }) => {
          return (
            <button
              key={color}
              value={JSON.stringify({ color: color, colorId: colorId })}
              name="color"
              onClick={handleClickButton}
              className={color === clickedInfo.color ? 'active' : ''}
              style={{ backgroundColor: color }}
            />
          );
        })}
      </div>
      <div className="sizePickers">
        {sizeList.map(({ size, sizeId }) => {
          return (
            <button
              key={size}
              value={JSON.stringify({ size, sizeId })}
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
        onClick={handleFetch}
      >
        장바구니에 담기
      </button>
    </div>
  );
}

export default Product;
