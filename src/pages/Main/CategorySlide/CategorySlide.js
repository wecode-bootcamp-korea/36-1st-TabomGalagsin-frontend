import React, { useState } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import SlideState from '../../../components/SlideState/SlideState';
import './CategorySlide.scss';

function CategorySlide({ color, textColor }) {
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
    <div className={`categorySlide  ${color}`}>
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
              categoryId={data.id}
              className={data.className}
              url={data.url}
              text={data.text}
            />
          ))}
        </div>
      </div>
      <div className="slideButtonContainer">
        <button
          className={`previousButton ${color}`}
          onClick={buttonClick}
          style={{ color: textColor }}
        >
          <i className="fa-solid fa-angle-left fa-xl" />
        </button>
        <ul className="slideStateContainer">
          {categoryDataPast.map((_, index) => (
            <SlideState
              key={index}
              position={index + firstPosition}
              slidePosition={
                categoryPosition % categoryDataPast.length < firstPosition
                  ? (categoryPosition % categoryDataPast.length) +
                    categoryDataPast.length
                  : categoryPosition % categoryDataPast.length >
                    categoryDataPast.length - 1 + firstPosition
                  ? (categoryPosition % categoryDataPast.length) -
                    categoryDataPast.length
                  : categoryPosition % categoryDataPast.length
              }
              stateColor={textColor}
            />
          ))}
        </ul>
        <button
          className={`nextButton ${color}`}
          onClick={buttonClick}
          style={{ color: textColor }}
        >
          <i className="fa-solid fa-angle-right fa-xl" />
        </button>
      </div>
    </div>
  );
}

export default CategorySlide;

const categoryDataPast = [
  {
    id: 1,
    className: 'sliper',
    url: 'https://cdn-icons-png.flaticon.com/512/7705/7705554.png',
    text: '슬리퍼',
  },
  {
    id: 2,

    className: 'snikers',
    url: 'https://cdn-icons-png.flaticon.com/512/2553/2553852.png',
    text: '운동화',
  },
  {
    id: 3,

    className: 'shoes',
    url: 'https://cdn-icons-png.flaticon.com/512/2290/2290456.png',
    text: '구두',
  },
  {
    id: 4,

    className: 'backpack',
    url: 'https://cdn-icons-png.flaticon.com/512/8185/8185975.png',
    text: '가방',
  },
  {
    id: 5,

    className: 'shirt',
    url: 'https://cdn-icons-png.flaticon.com/512/1867/1867631.png',
    text: '티셔츠',
  },
  {
    id: 6,

    className: 'ring',
    url: 'https://cdn-icons-png.flaticon.com/512/4003/4003300.png',
    text: '악세사리',
  },
];
