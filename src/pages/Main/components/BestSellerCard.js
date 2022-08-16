import './BestSellerCard.scss';

function BestSellerCard({ hasTwoCard }) {
  return (
    <div className="bestSellerCard">
      {hasTwoCard ? (
        <div className="shortCardsBox">
          <div className="shortTopCard">top</div>
          <div className="shortBottomCard">bottom</div>
        </div>
      ) : (
        <div className="longCardBox">
          <div className="longCard">long</div>
        </div>
      )}
    </div>
  );
}

export default BestSellerCard;
