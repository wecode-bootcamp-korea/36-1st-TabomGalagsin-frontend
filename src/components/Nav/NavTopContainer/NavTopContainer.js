import { useState /*useEffect*/ } from 'react';
import './NavTopContainer.scss';

function NavTopContainer() {
  const [currentPosition, setCurrentPosition] = useState(-2);
  const [transitionTime, setTransitionTime] = useState(0.5);

  // useEffect(() => {
  //   setInterval(() => {
  //     if (currentPosition > 2) {
  //       setTransitionTime(0);
  //       setCurrentPosition(-2);
  //       setTimeout(() => {
  //         setTransitionTime(0.5);
  //         setCurrentPosition(-1);
  //       }, 0);
  //     } else {
  //       setCurrentPosition(prew => prew + 1);
  //     }
  //   }, 1000);
  // }, []);

  const currentData = [...data, ...data, ...data];

  const carouselButton = event => {
    if (event.target.className === 'fa-solid fa-chevron-left leftArrow') {
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
    } else {
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
  { item: 'content for section 1' },
  { item: 'content for section 2' },
  { item: 'content for section 3' },
  { item: 'content for section 4' },
  { item: 'content for section 5' },
];
