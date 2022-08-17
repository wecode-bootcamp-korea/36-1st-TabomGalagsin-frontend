import './BestSellerCard.scss';

function BestSellerCard({ hasTwoCard, imgUrl, activation }) {
  return (
    <div className="bestSellerCard">
      {hasTwoCard ? (
        <div className="shortCardsBox">
          <div className="shortCard">
            <img alt="filp-flops" src={imgUrl[0]} />
          </div>

          <div className="shortCard">
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
