import React, { useState } from 'react';
import SlideState from './SlideState/SlideState.js';
import MainText from './MainText/MainText.js';
import BestSeller from './BestSeller/BestSeller.js';
import CategorySlide from './CategorySlide/CategorySlide.js';
import Nav from '../../components/Nav/Nav';
import './Main.scss';

function Main() {
  const [positionNow, setPositionNow] = useState(0);

  const mainSlideButtonClick = event => {
    event.target.className === 'previous' ||
    event.target.className === 'fa-solid fa-angle-left fa-xl'
      ? positionNow === 0
        ? setPositionNow(3)
        : setPositionNow(positionNow - 1)
      : positionNow === mainSlideData.length - 1
      ? setPositionNow(0)
      : setPositionNow(positionNow + 1);
  };
  return (
    <>
      <Nav color={mainSlideData[positionNow].color} />
      <div className={`main  ${mainSlideData[positionNow].color}`}>
        <MainText mainSlideData={mainSlideData} positionNow={positionNow} />
        <div className="buttonContainer">
          <button
            className={`previous ${mainSlideData[positionNow].color}`}
            onClick={mainSlideButtonClick}
            style={{
              color: `${mainSlideData[positionNow].textColor}`,
            }}
          >
            <i className="fa-solid fa-angle-left fa-xl" />
          </button>
          <ul className="slideStateContainer">
            {mainSlideData.map((_, index) => (
              <SlideState
                key={index}
                position={index}
                slidePosition={positionNow}
                stateColor={mainSlideData[positionNow].textColor}
              />
            ))}
          </ul>
          <button
            className={`next ${mainSlideData[positionNow].color}`}
            onClick={mainSlideButtonClick}
            style={{
              color: `${mainSlideData[positionNow].textColor}`,
            }}
          >
            <i className="fa-solid fa-angle-right fa-xl" />
          </button>
        </div>
        <CategorySlide
          color={mainSlideData[positionNow].color}
          textColor={mainSlideData[positionNow].textColor}
        />
        <BestSeller />
      </div>
    </>
  );
}

export default Main;

const mainSlideData = [
  {
    /*신규 상품 소개 blue*/
    textBig: '웹사이트에 새로운 소식이 있습니다!',
    textSmall: '새로운 제품을 만나보세요',
    imageLink:
      'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    color: 'blue',
    textColor: 'white',
  },
  {
    /*색상별 red*/
    textBig: '당신만의 색깔이 궁금하세요?',
    textSmall: '준비된 색상을 확인해보세요',
    imageLink:
      'https://images.unsplash.com/photo-1545231097-c046d9dcc2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80',
    color: 'red',
    textColor: 'white',
  },
  {
    /*카테고리별 yellow*/
    textBig: '무엇을 구매할지 고민중이신가요?',
    textSmall: '다양한 제품을 구경해보세요',
    imageLink:
      'https://images.unsplash.com/photo-1518112390430-f4ab02e9c2c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2081&q=80',
    color: 'yellow',
    textColor: 'black',
  },
  {
    /*베스트셀러 green*/
    textBig: '다른 고객님들의 선택이 궁금하세요?',
    textSmall: '베스트 셀러를 확인하세요',
    imageLink:
      'https://images.unsplash.com/photo-1607958674115-05b24858a945?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2825&q=80',
    color: 'green',
    textColor: 'white',
  },
];
