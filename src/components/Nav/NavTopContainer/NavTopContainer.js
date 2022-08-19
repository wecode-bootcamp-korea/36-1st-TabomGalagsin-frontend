import { useState, useEffect } from 'react';
import './NavTopContainer.scss';

function NavTopContainer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
  }, []);

  return (
    <div className="NavTopContainer">
      <div className="carousel">
        <div className="leftCover">
          <i className="fa-solid fa-chevron-left leftArrow" />
        </div>
        <div className="rightCover">
          <i className="fa-solid fa-chevron-right rightArrow" />
        </div>
        <div
          className="slider"
          style={{ transform: `translate(${count * -100}vw)` }}
        >
          <section className="list">content for section 1</section>
          <section className="list">content for section 2</section>
          <section className="list">content for section 3</section>
          <section className="list">content for section 4</section>
          <section className="list">content for section 5</section>
        </div>
        <div className="controls">
          <span className="arrow prev">1</span>
          <span className="arrow next">1</span>
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
