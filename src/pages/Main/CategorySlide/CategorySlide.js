import React, { useState } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import SlideState from './SlideState/SlideState';
import './CategorySlide.scss';

function CategorySlide() {
  const firstPosition = categoryDataPast.length % 2 === 0 ? -0.5 : 0;
  const [categoryPosition, setCategoryPosition] = useState(firstPosition);
  const [transitionTime, setTransitionTime] = useState(0.3);
  const categoryData = [
    ...categoryDataPast,
    ...categoryDataPast,
    ...categoryDataPast,
  ];

  const buttonClick = event => {
    if (
      event.target.className === 'previousButton' ||
      event.target.className === 'fa-solid fa-angle-left fa-xl'
    ) {
      if (categoryPosition === -(categoryData.length / 3) - firstPosition) {
        setTransitionTime(0);
        setCategoryPosition(firstPosition + 1);
        setTimeout(() => {
          setTransitionTime(0.3);
          setCategoryPosition(firstPosition);
        }, 0);
      } else {
        setTransitionTime(0.3);
        setCategoryPosition(categoryPosition - 1);
      }
    } else {
      if (categoryPosition === categoryData.length / 3 + firstPosition) {
        setTransitionTime(0);
        setCategoryPosition(firstPosition);
        setTimeout(() => {
          setTransitionTime(0.3);
          setCategoryPosition(firstPosition + 1);
        }, 0);
      } else {
        setTransitionTime(0.3);
        setCategoryPosition(categoryPosition + 1);
      }
    }
  };

  return (
    <div className="categorySlide">
      <div className="categorySlideViewer">
        <div
          className="categorySlideItem"
          style={{
            transform: `translateX(${-1 * ((100 / 5) * categoryPosition)}%)`,
            transition: `all ${transitionTime}s`,
          }}
        >
          {categoryData.map((data, index) => (
            <CategoryImage
              key={index}
              className={data.className}
              url={data.url}
              text={data.text}
            />
          ))}
        </div>
      </div>
      <div className="slideButtonContainer">
        <button className="previousButton" onClick={buttonClick}>
          <i className="fa-solid fa-angle-left fa-xl" />
        </button>
        <ul className="slideStateContainer">
          {categoryDataPast.map((_, index) => (
            <SlideState
              key={index}
              listPosition={index}
              length={categoryDataPast.length}
              categoryPosition={categoryPosition}
            />
          ))}
        </ul>
        <button className="nextButton" onClick={buttonClick}>
          <i className="fa-solid fa-angle-right fa-xl" />
        </button>
      </div>
    </div>
  );
}

export default CategorySlide;

const categoryDataPast = [
  {
    className: 'sliper',
    url: 'https://cdn-icons-png.flaticon.com/512/7705/7705554.png',
    text: '슬리퍼',
  },
  {
    className: 'snikers',
    url: 'https://cdn-icons-png.flaticon.com/512/2553/2553852.png',
    text: '운동화',
  },
  {
    className: 'shoes',
    url: 'https://cdn-icons.flaticon.com/png/512/3345/premium/3345800.png?token=exp=1660708197~hmac=43aa6881dcbbb086d80827cdcb21d124',
    text: '구두',
  },
  {
    className: 'backpack',
    url: 'https://cdn-icons.flaticon.com/png/512/4663/premium/4663075.png?token=exp=1660708981~hmac=b91d7b1d7de2454b09e95e2d35f8e41f',
    text: '가방',
  },
  {
    className: 'shirt',
    url: 'https://cdn-icons-png.flaticon.com/512/1867/1867631.png',
    text: '티셔츠',
  },
  {
    className: 'ring',
    url: 'https://cdn-icons.flaticon.com/png/512/721/premium/721913.png?token=exp=1660709195~hmac=c0365c627eada4ae1a2f325f4b2feab1',
    text: '악세사리',
  },
];
