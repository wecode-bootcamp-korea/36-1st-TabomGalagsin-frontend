import { useState } from 'react';
import './BestSeller.scss';
import BestSellerCard from './BestSellerCard/BestSellerCard';

function BestSeller() {
  const [activeCardKey, setActiveCardKey] = useState(0);
  // const [cardsList, setCardsList] = useState(CardsList);

  const handleClickLeftButton = e => {
    setActiveCardKey(activeCardKey =>
      activeCardKey === -3 ? CardsList.length - 1 - 7 : activeCardKey - 1
    );
  };

  const handleClickRightButton = e => {
    setActiveCardKey(activeCardKey =>
      activeCardKey === CardsList.length - 1 - 6 ? 0 : activeCardKey + 1
    );
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
          transform: `translateX(${(activeCardKey - 1) * -23}rem)`,
        }}
      >
        {/* {cardsList.map((card, idx) => {
          const hasTwoCard = card.imgUrl.length === 2;
          return (
            <BestSellerCard
              key={idx}
              hasTwoCard={hasTwoCard}
              imgUrl={card.imgUrl}
              activation={idx === activeCardKey ? 'active' : ''}
            />
          );
        })} */}
        {CardsList.map((card, idx) => {
          const hasTwoCard = card.imgUrl.length === 2;
          return (
            <BestSellerCard
              key={idx}
              hasTwoCard={hasTwoCard}
              imgUrl={card.imgUrl}
              activation={idx === activeCardKey ? 'active' : ''}
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

let CardsList = [
  {
    id: 1,
    imgUrl: ['/images/main/filp-flops-1.jpg', '/images/main/filp-flops-2.jpg'],
  },
  { id: 2, imgUrl: ['/images/main/filp-flops-4.jpg'] },
  {
    id: 3,
    imgUrl: ['/images/main/filp-flops-3.jpg', '/images/main/filp-flops-6.jpg'],
  },
  { id: 4, imgUrl: ['/images/main/filp-flops-5.jpg'] },
  {
    id: 5,
    imgUrl: ['/images/main/filp-flops-7.jpg', '/images/main/filp-flops-8.jpg'],
  },
  { id: 6, imgUrl: ['/images/main/filp-flops-9.jpg'] },
];

CardsList = [
  CardsList[CardsList.length - 1 - 2],
  CardsList[CardsList.length - 1 - 1],
  CardsList[CardsList.length - 1 - 0],
  ...CardsList,
  CardsList[0],
  CardsList[1],
  CardsList[2],
];
