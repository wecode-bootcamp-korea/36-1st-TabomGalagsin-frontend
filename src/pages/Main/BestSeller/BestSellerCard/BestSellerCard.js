import './BestSellerCard.scss';

function BestSellerCard({ hasTwoCard, imgUrl, activation }) {
  return (
    <div className={`bestSellerCard ${activation}`}>
      {hasTwoCard ? (
        <div className="shortCardsBox">
          <div className="shortTopCard">
            <img alt="filp-flops" src={imgUrl[0]} />
          </div>

          <div className="shortBottomCard">
            <img alt="filp-flops" src={imgUrl[1]} />
          </div>
        </div>
      ) : (
        <div className="longCardBox">
          <div className="longCard">
            <img alt="filp-flops" src={imgUrl} />
          </div>
        </div>
      )}
    </div>
  );
}

export default BestSellerCard;
