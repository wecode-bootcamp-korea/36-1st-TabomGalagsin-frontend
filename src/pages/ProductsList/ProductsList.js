import { useState } from 'react';
import './ProductsList.scss';

function ProductsList() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="productsList">
      <div className="listNav">
        <div className="breadCrumps">빵</div>
        <div className="orderContainer">order</div>
      </div>

      <aside className="filterAside">
        <div className="filter" onClick={setIsMenuOpened(!isMenuOpened)}>
          색상
        </div>
        {isMenuOpened && <input}
        <div className="filterMenu"></div>
        <div className="filter">가격</div>
        <div className="filter">크기</div>
        <div className="filter">백엔드</div>
        <div className="filter">화이팅</div>
      </aside>
      <section className="listContainer">list</section>
    </div>
  );
}

export default ProductsList;
