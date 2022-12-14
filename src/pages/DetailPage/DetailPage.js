import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import ColourOption from './ColourOption/ColourOption';
import SizeOption from './SizeOption/SizeOption';
import RecommendProducts from '../Main/RecommendProducts/RecommendProducts';
import Footer from '../../components/Footer/Footer';
import './DetailPage.scss';
import { API } from '../../config';

function DetailPage() {
  const [productDetail, setProductDetail] = useState({});
  const [productsList, setProductsList] = useState([]);
  const [click, setClick] = useState({ 1: false, 2: false, 3: true });
  const [isClicked, setIsClicked] = useState(false);
  const { productId } = useParams();
  const [clickedInfo, setClickedInfo] = useState({
    colorId: 1,
    sizeId: 0,
  });
  const [cartedCount, setCartedCount] = useState(
    localStorage.getItem('totalProduct')
  );
  const [userToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    fetch(`http://10.58.0.250:3000/products/${productId}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductDetail(data.products);
        if (
          data.products.color.length === 1 &&
          data.products.size.length === 1
        ) {
          setClickedInfo({ colorId: 1, sizeId: 3 });
        } else if (data.products.color.length === 1) {
          setClickedInfo({ ...clickedInfo, colorId: 1 });
        } else if (data.products.size.length === 1) {
          setClickedInfo(prev => (prev = { ...clickedInfo, sizeId: 3 }));
        }
        if (
          data.products.color.length === 1 &&
          data.products.size.length === 1
        ) {
          setIsClicked(true);
        }
      });

    fetch(API.RECOMMEND_RANDOM, {
      method: 'GET',
      headers: {
        'Content-Type': 'Application/json',
      },
    })
      .then(res => res.json())
      .then(data => setProductsList(Object.values(data)[0]));
  }, [productId]);

  const { category, is_new, name, price, description, color, size } =
    productDetail;

  const handleClickButton = (name, value) => {
    setClickedInfo({ ...clickedInfo, [name]: value });
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
            alert('????????? ????????? ????????????.');
          res.message === 'PRODUCT_ALREADY_EXISTS_IN_CART' &&
            alert('?????? ??????????????? ?????? ???????????????.');
          if (res.totalProduct) {
            setCartedCount(res.totalProduct);
            localStorage.setItem('totalProduct', res.totalProduct);
          }
        });
      setClickedInfo(
        prev =>
          (prev = {
            colorId: 1,
            sizeId: 0,
          })
      );
      setClick({ 1: false, 2: false, 3: true });
    } else {
      alert('???????????? ????????? ??? ?????? ???????????????');
    }
  };
  const setSelectColour = useState(0)[1];

  const changeColor = id => {
    color.unshift(color[id]);
    color.splice(id + 1, 1);
  };

  return (
    <>
      <Nav cartedCount={cartedCount} setCartedCount={setCartedCount} />
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
                <img
                  className="pic"
                  alt="flipflops in sand"
                  src={color?.[0].thumbnailUrl}
                />
              </div>
            </div>
            <div className="productDetail">
              {is_new ? <span className="status">New</span> : null}
              <span className="font title">{name}</span>
              <span className="font price">
                ???
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
                        id={colourItem.colorId}
                        color={colourItem.color}
                        index={index}
                        handleClickButton={handleClickButton}
                        setSelectColour={setSelectColour}
                        changeColor={changeColor}
                      />
                    );
                  })}
              </div>

              <span className="option">Select Size:</span>
              <div className="sizeOption">
                {Object.keys(productDetail).length > 0 &&
                  size.map(sizeItem => (
                    <SizeOption
                      key={sizeItem.sizeId}
                      id={sizeItem.sizeId}
                      size={sizeItem.size}
                      click={click}
                      handleClickButton={handleClickButton}
                      setClick={setClick}
                      setIsClicked={setIsClicked}
                    />
                  ))}
              </div>
              <button
                className={
                  isClicked
                    ? 'addToBag flipflopCursor'
                    : 'selectSize flipflopCursor'
                }
                disabled={!isClicked}
                onClick={() => handleFetch()}
              >
                {isClicked ? 'ADD TO BAG' : 'SELECT SIZE'}
              </button>
            </div>
          </div>
          <hr />
          <div className="productDesc">
            <p className="font">Description</p>
            <p className="subFont">{description}</p>
          </div>
        </div>
        <RecommendProducts
          setCartedCount={setCartedCount}
          productsList={productsList}
          title="Recommend"
        />
        <Footer />
      </div>
    </>
  );
}
export default DetailPage;
