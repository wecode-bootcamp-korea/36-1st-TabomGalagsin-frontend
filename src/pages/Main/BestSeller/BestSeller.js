import { useState } from 'react';
import SlideState from '../../../components/SlideState/SlideState.js';
import BestSellerCard from './BestSellerCard/BestSellerCard';
import { useNavigate } from 'react-router-dom';
import { goTo } from '../../../function.js';
import './BestSeller.scss';

function BestSeller({ color, textColor }) {
  const navigate = useNavigate();
  const [currentPosition, setCurrentPosition] = useState(0);
  const [transitionTime, setTransitionTime] = useState(0.3);
  const cardSize = 21;

  const handleClickLeftButton = () => {
    if (currentPosition === 0) {
      setTransitionTime(0);
      setCurrentPosition(CARD_LIST.length);
      setTimeout(() => {
        setTransitionTime(0.3);
        setCurrentPosition(CARD_LIST.length - 1);
      }, 0);
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
        <button
          className="linkButton"
          onClick={() => goTo(navigate, '/categories/1/type/1')}
        >
          <span>더 많은 제품 보기</span>
          <i className="fa-solid fa-angle-right fa-lg" />
        </button>
      </div>
      <div
        className="slide"
        style={{
          transform: `translateX(${(currentPosition - 1) * -cardSize}vw)`,
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
        <button
          onClick={handleClickLeftButton}
          className={color}
          style={{ color: textColor }}
        >
          <i className="fa-solid fa-angle-left fa-xl" />
        </button>
        <ul className="slideStateContainer">
          {CARD_LIST.map((_, idx) => {
            return (
              <SlideState
                key={idx}
                position={idx}
                slidePosition={currentPosition}
                stateColor={textColor}
              />
            );
          })}
        </ul>
        <button
          className={color}
          style={{ color: textColor }}
          onClick={handleClickRightButton}
        >
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
