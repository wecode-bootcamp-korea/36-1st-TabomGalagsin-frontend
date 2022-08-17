import React from 'react';
import './Main.scss';

function Main() {
  return (
    <div className="main">
      <div className="mainSlideContainer">
        <div className="mainText">
          <div className="textBig">웹사이트에 새로운 소식이 있습니다!</div>
          <div className="textSmall">새로운 제품을 만나보세요</div>
          <div className="aboutLink">지금 보러가기</div>
        </div>
        <div className="bannerImageContainer">
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="banner"
          />
        </div>
      </div>
      <div className="buttonContainer">
        <button className="previous">
          <i className="fa-solid fa-angle-left fa-xl" />
        </button>
        <div className="positionState positionNow" />
        <div className="positionState" />
        <div className="positionState" />
        <div className="positionState" />
        <div className="positionState" />
        <div className="positionState" />
        <button className="next">
          <i className="fa-solid fa-angle-right fa-xl" />
        </button>
      </div>
    </div>
  );
}

export default Main;

// const mainSlideData = [
//   {
//     id: 1,
//     textBig: '웹사이트에 새로운 소식이 있습니다!',
//     textSmall: '새로운 제품을 만나보세요',
//     imageLink:
//       'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
//   },
// ];
