import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ColourOption from './ColourOption/ColourOption';
import SizeOption from './SizeOption/SizeOption';
import './DetailPage.scss';

function DetailPage() {
  const [productDetail, setProductDetail] = useState({});
  useEffect(() => {
    fetch('/data/detail.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setProductDetail(data.products));
  }, []);

  const { category, is_new, name, price, description, imageUrl, color, size } =
    productDetail;

  const [selectColour, setSelectColour] = useState([]);
  colourClickHandler = () => {
    color.forEach((el, idx) => {
      el.onclick = () => {
        console.log(idx);
      };
    });
  };

  return (
    <>
      <Nav />
      <div className="detailPage">
        <div className="container">
          <div className="productNavigation">
            <Link to="/" className="link">
              Main page
            </Link>
            <span>&gt;</span>
            <Link to="/" className="link bold">
              <span className="bold">{category}</span>
            </Link>
          </div>
          <div className="middleContainer">
            <div className="leftSide">
              <div className="productPicWrapper">
                <img className="pic" alt="flipflops in sand" src={imageUrl} />
              </div>
            </div>
            <div className="productDetail">
              {is_new ? <span className="status">New</span> : null}
              <span className="font title">{name}</span>
              <span className="font price">
                ₩
                {Number(price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
              </span>
              <span className="option">Select colour:</span>
              <div className="colourOption">
                {Object.keys(productDetail).length > 0 &&
                  color.map((colourItem, index) => {
                    return (
                      <ColourOption
                        key={colourItem.colorId}
                        color={colourItem.color}
                        id={index}
                        onClick={colourClickHandler}
                      />
                    );
                  })}
              </div>

              <span className="option">Select Size:</span>
              <div className="sizeOption">
                {Object.keys(productDetail).length > 0 &&
                  size.map(sizeItem => (
                    <SizeOption key={sizeItem.sizeId} size={sizeItem.size} />
                  ))}
              </div>
              <button className="addToBag">SELECT SIZE</button>
            </div>
          </div>
          <hr />
          <div className="productDesc">
            <p className="font">Description</p>
            <p className="subFont">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
