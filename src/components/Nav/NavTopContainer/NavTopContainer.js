import { useState } from 'react';
import useInterval from '../../../useInterval';
import './NavTopContainer.scss';

function NavTopContainer() {
  const [currentPosition, setCurrentPosition] = useState(-2);
  const [transitionTime, setTransitionTime] = useState(0.5);
  const [resetAuto, setResetAuto] = useState(1);

  const currentData = [...CAROUSEL_DATA, ...CAROUSEL_DATA, ...CAROUSEL_DATA];

  const clickButton = event => {
    if (event.target.className !== 'fa-solid fa-chevron-left arrow') {
      if (currentPosition > 2) {
        setTransitionTime(0);
        setCurrentPosition(-2);
        setTimeout(() => {
          setTransitionTime(0.5);
          setCurrentPosition(-1);
        }, 0);
      } else {
        setCurrentPosition(currentPosition + 1);
      }
    } else {
      if (currentPosition < -2) {
        setTransitionTime(0);
        setCurrentPosition(2);
        setTimeout(() => {
          setTransitionTime(0.5);
          setCurrentPosition(1);
        }, 0);
      } else {
        setCurrentPosition(currentPosition - 1);
      }
    }
  };

  useInterval(() => {
    if (currentPosition > 2) {
      setTransitionTime(0);
      setCurrentPosition(-2);
      setTimeout(() => {
        setTransitionTime(() => 0.5);
        setCurrentPosition(() => -1);
      }, 100);
    } else {
      setCurrentPosition(prev => prev + 1);
    }
  }, 3000 + resetAuto);

  return (
    <div className="navTopContainer">
      <div className="carousel">
        <div className="leftCover">
          <i
            className="fa-solid fa-chevron-left arrow"
            onClick={event => {
              clickButton(event);
              setResetAuto(prev => prev * -1);
            }}
          />
        </div>
        <div className="slider">
          <div
            className="sliderInner"
            style={{
              transform: `translate(${(currentPosition * -100) / 15}%)`,
              transition: `all ${transitionTime}s`,
            }}
          >
            {currentData.map((data, index) => {
              return (
                <section className="list" key={index}>
                  {data.item}
                </section>
              );
            })}
          </div>
        </div>
        <div className="rightCover">
          <i
            className="fa-solid fa-chevron-right arrow"
            onClick={event => {
              clickButton(event);
              setResetAuto(prev => prev * -1);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default NavTopContainer;

const CAROUSEL_DATA = [
  { item: '상파울루시로 특급배송' },
  { item: '배송 옵션 및 서비스를 확인하려면 우편번호를 입력해 확인해 보세요.' },
  { item: '상파울루시로 특급배송' },
  { item: '배송 옵션 및 서비스를 확인하려면 우편번호를 입력해 확인해 보세요.' },
  { item: '따봉 가락신  화이팅!' },
];
