import { useState } from 'react';
import './BestSeller.scss';
import BestSellerCard from './BestSellerCard/BestSellerCard';

function BestSeller() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [transitionTime, setTransitionTime] = useState(0.3);

  const handleClickLeftButton = () => {
    if (currentPosition === 0) {
      setTransitionTime(0);
      setCurrentPosition(CardsList.length - 1 + 1);
      setTimeout(() => {
        setTransitionTime(0.3);
        setCurrentPosition(CardsList.length - 1);
      }, 10);
    } else {
      setCurrentPosition(prev => prev - 1);
    }
  };
  const handleClickRightButton = () => {
    if (currentPosition === CardsList.length - 1) {
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
          더 많은 제품 보기&nbsp;&nbsp;&nbsp;>
        </button>
      </div>
      <div
        className="slide"
        style={{
          transform: `translateX(${(currentPosition - 1) * -23}rem)`,
          transition: `all ${transitionTime}s`,
        }}
      >
        {dummyCardsList.map((card, idx) => {
          const hasTwoCard = card.imgUrl.length === 2;
          return (
            <BestSellerCard
              key={idx}
              hasTwoCard={hasTwoCard}
              imgUrl={card.imgUrl}
              // activation={idx === currentPosition ? 'active' : ''}
            />
          );
        })}
      </div>
      <div className="slideSelector">
        <button onClick={handleClickLeftButton}>&lt;</button> - - - - -
        <button onClick={handleClickRightButton}>&gt;</button>
      </div>
    </div>
  );
}

export default BestSeller;

const CardsList = [
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

let dummyCardsList = [...CardsList, ...CardsList, ...CardsList];
