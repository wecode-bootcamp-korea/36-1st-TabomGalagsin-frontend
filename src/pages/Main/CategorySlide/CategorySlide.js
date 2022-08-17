import React, { useState } from 'react';
import CategoryImage from './CategoryImage/CategoryImage';
import SlideState from './SlideState/SlideState';
import './CategorySlide.scss';

function CategorySlide() {
  const [categoryPosition, setCategoryPosition] = useState(-0.5);
  const [transitionTime, setTransitionTime] = useState(0.3);

  const buttonClick = event => {
    if (
      event.target.className === 'previousButton' ||
      event.target.className === 'fa-solid fa-angle-left fa-xl'
    ) {
      if (categoryPosition === -6.5) {
        setTransitionTime(0);
        setCategoryPosition(-0.5);
        setTimeout(() => {
          setTransitionTime(0.3);
          setCategoryPosition(-1.5);
        }, 0);
      } else {
        setTransitionTime(0.3);
        setCategoryPosition(categoryPosition - 1);
      }
    } else {
      if (categoryPosition === 5.5) {
        setTransitionTime(0);
        setCategoryPosition(-0.5);
        setTimeout(() => {
          setTransitionTime(0.3);
          setCategoryPosition(0.5);
        }, 0);
      } else {
        setTransitionTime(0.3);
        setCategoryPosition(categoryPosition + 1);
      }
    }
  };

  return (
    <div className="categoryContainer">
      <div className="categorySlideContainer">
        <div
          className="categorySlide"
          style={{
            transform: `translateX(${-1 * ((100 / 5) * categoryPosition)}%)`,
            transition: `all ${transitionTime}s`,
          }}
        >
          {categoryData.map(data => (
            <CategoryImage
              key={data.id}
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
          {positionData.map(data => (
            <SlideState
              key={data.id}
              position={data.position}
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

const categoryData = [
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
    url: 'https://cdn-icons.flaticon.com/png/512/3345/premium/3345800.png?token=exp=1660708197~hmac=43aa6881dcbbb086d80827cdcb21d124',
    text: '구두',
  },
  {
    id: 4,
    className: 'backpack',
    url: 'https://cdn-icons.flaticon.com/png/512/4663/premium/4663075.png?token=exp=1660708981~hmac=b91d7b1d7de2454b09e95e2d35f8e41f',
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
    url: 'https://cdn-icons.flaticon.com/png/512/721/premium/721913.png?token=exp=1660709195~hmac=c0365c627eada4ae1a2f325f4b2feab1',
    text: '악세사리',
  },
  {
    id: 7,
    className: 'sliper',
    url: 'https://cdn-icons-png.flaticon.com/512/7705/7705554.png',
    text: '슬리퍼',
  },
  {
    id: 8,
    className: 'snikers',
    url: 'https://cdn-icons-png.flaticon.com/512/2553/2553852.png',
    text: '운동화',
  },
  {
    id: 9,
    className: 'shoes',
    url: 'https://cdn-icons.flaticon.com/png/512/3345/premium/3345800.png?token=exp=1660708197~hmac=43aa6881dcbbb086d80827cdcb21d124',
    text: '구두',
  },
  {
    id: 10,
    className: 'backpack',
    url: 'https://cdn-icons.flaticon.com/png/512/4663/premium/4663075.png?token=exp=1660708981~hmac=b91d7b1d7de2454b09e95e2d35f8e41f',
    text: '가방',
  },
  {
    id: 11,
    className: 'shirt',
    url: 'https://cdn-icons-png.flaticon.com/512/1867/1867631.png',
    text: '티셔츠',
  },
  {
    id: 12,
    className: 'ring',
    url: 'https://cdn-icons.flaticon.com/png/512/721/premium/721913.png?token=exp=1660709195~hmac=c0365c627eada4ae1a2f325f4b2feab1',
    text: '악세사리',
  },
  {
    id: 13,
    className: 'sliper',
    url: 'https://cdn-icons-png.flaticon.com/512/7705/7705554.png',
    text: '슬리퍼',
  },
  {
    id: 14,
    className: 'snikers',
    url: 'https://cdn-icons-png.flaticon.com/512/2553/2553852.png',
    text: '운동화',
  },
  {
    id: 15,
    className: 'shoes',
    url: 'https://cdn-icons.flaticon.com/png/512/3345/premium/3345800.png?token=exp=1660708197~hmac=43aa6881dcbbb086d80827cdcb21d124',
    text: '구두',
  },
  {
    id: 16,
    className: 'backpack',
    url: 'https://cdn-icons.flaticon.com/png/512/4663/premium/4663075.png?token=exp=1660708981~hmac=b91d7b1d7de2454b09e95e2d35f8e41f',
    text: '가방',
  },
  {
    id: 17,
    className: 'shirt',
    url: 'https://cdn-icons-png.flaticon.com/512/1867/1867631.png',
    text: '티셔츠',
  },
  {
    id: 18,
    className: 'ring',
    url: 'https://cdn-icons.flaticon.com/png/512/721/premium/721913.png?token=exp=1660709195~hmac=c0365c627eada4ae1a2f325f4b2feab1',
    text: '악세사리',
  },
];

const positionData = [
  {
    id: 1,
    position: [-6.5, -0.5, 5.5],
  },
  {
    id: 2,
    position: [-5.5, 0.5],
  },
  {
    id: 3,
    position: [-4.5, 1.5],
  },
  {
    id: 4,
    position: [-3.5, 2.5],
  },
  {
    id: 5,
    position: [-2.5, 3.5],
  },
  {
    id: 6,
    position: [-1.5, 4.5],
  },
];
