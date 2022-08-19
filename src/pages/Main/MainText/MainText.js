import React from 'react';
import './MainText.scss';

function MainText({ mainSlideData, positionNow }) {
  return (
    <div className="mainSlideContainer">
      <div className="mainText">
        <div className={`textBig ${mainSlideData[positionNow].textColor}`}>
          {mainSlideData[positionNow].textBig}
        </div>
        <div className={`textSmall ${mainSlideData[positionNow].textColor}`}>
          {mainSlideData[positionNow].textSmall}
        </div>
        <div className="aboutLink">지금 보러가기</div>
      </div>
      <div className="bannerImageContainer">
        <img src={mainSlideData[positionNow].imageLink} alt="banner" />
      </div>
    </div>
  );
}

export default MainText;
