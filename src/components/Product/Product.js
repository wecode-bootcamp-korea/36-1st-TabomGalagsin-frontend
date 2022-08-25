import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../../config.js';
import { appendComma, goToUrl } from '../../utils.js';
import './Product.scss';

function Product({
  dataArrIdx,
  productName,
  price,
  imgUrl,
  colorList,
  sizeList,
  productId,
  setCartedCount,
}) {
  const navigate = useNavigate();
  const [clickedInfo, setClickedInfo] = useState({
    color: '',
    colorId: 0,
    size: '',
    sizeId: 0,
  });
  const [userToken] = useState(localStorage.getItem('token'));
  const [thumbnailUrl, setThumbnailUrl] = useState(imgUrl);

  const handleClickButton = e => {
    const { name, value } = e.target;
    const valueObj = JSON.parse(value);

    if ('color' === Object.keys(valueObj)[0]) {
      imgUrl = colorList.filter(
        colorInfo => colorInfo.color === valueObj.color
      )[0].thumbnailUrl;

      setThumbnailUrl(imgUrl);
    }

    clickedInfo[name] === name
      ? setClickedInfo({ ...clickedInfo, [name]: '', [name + 'Id']: 0 })
      : setClickedInfo({
          ...clickedInfo,
          [name]: valueObj[name],
          [name + 'Id']: valueObj[name + 'Id'],
        });
  };

  const handleFetch = () => {
    if (localStorage.getItem('token')) {
      fetch(`${API.CART}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json',
          authorization: userToken,
        },
        body: JSON.stringify({
          productId: productId,
          quantity: 1,
          sizeId: clickedInfo.sizeId,
          colorId: clickedInfo.colorId,
        }),
      })
        .then(response => response.json())
        .then(res => {
          res.message === 'PRODUCT_STOCK_WAS_EMPTY' &&
            alert('상품의 재고가 없습니다.');
          res.message === 'PRODUCT_ALREADY_EXISTS_IN_CART' &&
            alert('이미 장바구니에 담긴 상품입니다.');
          if (res.totalProduct) {
            setCartedCount(res.totalProduct);
            localStorage.setItem('totalProduct', res.totalProduct);
          }
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
    } else {
      alert('비회원은 이용할 수 없는 기능입니다');
    }
  };

  const isClickedAll = !!clickedInfo.color && !!clickedInfo.size;
  const colIndexOfCard = dataArrIdx % 3;
  const rowIndexOfCard = Math.floor(dataArrIdx / 3);

  return (
    <div
      className={`product product_col${colIndexOfCard}_row${rowIndexOfCard}`}
    >
      <div
        onClick={() => goToUrl(navigate, `/products/${productId}`)}
        className="linkComponent"
      >
        <img alt="product" src={thumbnailUrl} />
      </div>
      <div
        onClick={() => goToUrl(navigate, `/products/${productId}`)}
        className="linkComponent"
      >
        <p className="description">{productName}</p>
      </div>
      <p className="price">KRW {appendComma(Number(price))}</p>
      <div className="colorPickers">
        {colorList.map(({ color, colorId }) => {
          return (
            <button
              key={color}
              value={JSON.stringify({ color, colorId })}
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
