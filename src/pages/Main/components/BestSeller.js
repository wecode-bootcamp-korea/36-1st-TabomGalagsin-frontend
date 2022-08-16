import './BestSeller.scss';
import BestSellerCard from './BestSellerCard';

function BestSeller() {
  // const BestSellerCardsList = [{ id: 1 }, { id: 2 }, {}, {}, {}, {}, {}, {}];
  // console.log(BestSellerCardsList[0].id % 2);
  // console.log(BestSellerCardsList[1].id % 2);
  return (
    <div className="bestSeller">
      <div className="header">
        <h1 className="title">Best Seller</h1>
        <button className="linkButton">더 많은 제품 보기 ></button>
      </div>
      <div className="slide">
        {/* {Bestlis.map((x, i) => i % 2 === 0 )} */}
        <BestSellerCard hasTwoCard={true} />
        <BestSellerCard hasTwoCard={false} />
        <BestSellerCard hasTwoCard={true} />
        <BestSellerCard hasTwoCard={false} />
        <BestSellerCard hasTwoCard={true} />
        <BestSellerCard hasTwoCard={false} />
        <BestSellerCard hasTwoCard={true} />
        <BestSellerCard hasTwoCard={false} />
      </div>
      <div className="slideSelector">- - - - -</div>
    </div>
  );
}

export default BestSeller;
