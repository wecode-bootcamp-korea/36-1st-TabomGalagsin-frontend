import { useState } from 'react';
import './BestSeller.scss';
import BestSellerCard from './BestSellerCard/BestSellerCard';

function BestSeller() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [transitionTime, setTransitionTime] = useState(0.3);
  const cardSize = 23;

  const handleClickLeftButton = () => {
    if (currentPosition === 0) {
      setTransitionTime(0);
      setCurrentPosition(CARD_LIST.length);
      setTimeout(() => {
        setTransitionTime(0.3);
        setCurrentPosition(CARD_LIST.length - 1);
      }, 10);
    } else {
      setCurrentPosition(prev => prev - 1);
    }
  };
  const handleClickRightButton = () => {
    if (currentPosition === CARD_LIST.length - 1) {
      setTransitionTime(0);
      setCurrentPosition(-1);
      setTimeout(() => {
        setTransitionTime(0.3);
        setCurrentPosition(0);
      }, 0);
    } else {
      setCurrentPosition(prev => prev + 1);
    }
  };

  return (
    <div className="bestSeller">
      <div className="header">
        <h1 className="title">Best Seller</h1>
        <button className="linkButton">
          <span>더 많은 제품 보기</span>
          <i className="fa-solid fa-angle-right fa-lg" />
        </button>
      </div>
      <div
        className="slide"
        style={{
          transform: `translateX(${(currentPosition - 1) * -cardSize}rem)`,
          transition: `all ${transitionTime}s`,
        }}
      >
        {DUMMY_CARD_LIST.map(({ imgUrl }, idx) => {
          const hasTwoCard = imgUrl.length === 2;
          return (
            <BestSellerCard key={idx} hasTwoCard={hasTwoCard} imgUrl={imgUrl} />
          );
        })}
      </div>
      <div className="slideButtonContainer">
        <button onClick={handleClickLeftButton}>
          <i className="fa-solid fa-angle-left fa-xl" />
        </button>
        <ul className="slideStateContainer">
          {CARD_LIST.map((_, idx) => {
            return (
              <li
                key={idx}
                className={`slideState ${
                  idx === currentPosition ? 'positionNow' : ''
                }`}
              />
            );
          })}
        </ul>
        <button onClick={handleClickRightButton}>
          <i className="fa-solid fa-angle-right fa-xl" />
        </button>
      </div>
    </div>
  );
}

export default BestSeller;

const CARD_LIST = [
  {
    id: 0,
    imgUrl: ['/images/main/filp-flops-1.jpg', '/images/main/filp-flops-2.jpg'],
  },
  { id: 1, imgUrl: ['/images/main/filp-flops-4.jpg'] },
  {
    id: 2,
    imgUrl: ['/images/main/filp-flops-3.jpg', '/images/main/filp-flops-6.jpg'],
  },
  { id: 3, imgUrl: ['/images/main/filp-flops-5.jpg'] },
  {
    id: 4,
    imgUrl: ['/images/main/filp-flops-7.jpg', '/images/main/filp-flops-8.jpg'],
  },
  { id: 5, imgUrl: ['/images/main/filp-flops-9.jpg'] },
];

let DUMMY_CARD_LIST = [...CARD_LIST, ...CARD_LIST, ...CARD_LIST];
