import { useEffect, useState, useRef } from 'react';
import './NavTopContainer.scss';

function NavTopContainer() {
  const [currentPosition, setCurrentPosition] = useState(-2);
  const [transitionTime, setTransitionTime] = useState(0.5);

  const currentData = [...data, ...data, ...data];

  function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  const sliding = () => {
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
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     sliding();
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // });

  useInterval(() => {
    sliding();
  }, 3000);

  const carouselButton = e => {
    if (e.target.className === 'fa-solid fa-chevron-left arrow') {
      if (currentPosition < -2) {
        setTransitionTime(0);
        setCurrentPosition(2);
        setTimeout(() => {
          setTransitionTime(2);
          setCurrentPosition(1);
        }, 0);
      } else {
        setCurrentPosition(currentPosition - 1);
      }
    } else {
      if (currentPosition > 2) {
        setTransitionTime(0);
        setCurrentPosition(-2);
        setTimeout(() => {
          setTransitionTime(2);
          setCurrentPosition(-1);
        }, 0);
      } else {
        setCurrentPosition(currentPosition + 1);
      }
    }
  };

  return (
    <div className="navTopContainer">
      <div className="carousel">
        <div className="leftCover">
          <i
            className="fa-solid fa-chevron-left arrow"
            onClick={carouselButton}
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
            onClick={carouselButton}
          />
        </div>
      </div>
    </div>
  );
}

export default NavTopContainer;

const data = [
  { item: '상파울루시로 특급배송' },
  { item: '배송 옵션 및 서비스를 확인하려면 우편번호를 입력해 확인해 보세요.' },
  { item: '상파울루시로 특급배송' },
  { item: '배송 옵션 및 서비스를 확인하려면 우편번호를 입력해 확인해 보세요.' },
  { item: '따봉 가락신  화이팅!' },
];
