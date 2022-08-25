import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MainText.scss';

function MainText({ mainSlideData, positionNow }) {
  const navigate = useNavigate();
  return (
    <div className="mainText">
      <div className="mainSlideContainer">
        <div className={`textBig ${mainSlideData[positionNow].textColor}`}>
          {mainSlideData[positionNow].textBig}
        </div>
        <div className={`textSmall ${mainSlideData[positionNow].textColor}`}>
          {mainSlideData[positionNow].textSmall}
        </div>
        <div
          className="aboutLink flipflopCursor"
          onClick={() => navigate('/categories/1/type/1')}
        >
          지금 보러가기
        </div>
      </div>
      <div className="bannerImageContainer">
        <img src={mainSlideData[positionNow].imageLink} alt="banner" />
      </div>
    </div>
  );
}

export default MainText;
