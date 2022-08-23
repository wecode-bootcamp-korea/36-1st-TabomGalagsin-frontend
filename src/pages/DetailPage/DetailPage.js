import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import './DetailPage.scss';

function DetailPage() {
  return (
    <>
      <Nav />
      <div className="detailPage">
        <div className="container">
          <div className="productNavigation">
            <Link to="/" className="link">
              Main page
            </Link>
            <span>></span>
            <Link to="/" className="link bold">
              <span className="bold">Flipflops</span>
            </Link>
          </div>
          <div className="middleContainer">
            <div className="leftSide">
              <div className="productPicWrapper">
                <img
                  className="pic"
                  alt="flipflops in sand"
                  src="https://images.unsplash.com/photo-1601946771183-2e0659c5ae69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxpcGZsb3BzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                />
              </div>
            </div>
            <div className="productDetail">
              <span className="status">New</span>
              <span className="font title">We've got a Coconut</span>
              <span className="font price">₩ 25,000</span>
              <span className="option">Select colour:</span>
              <div className="colourOption">
                <button className="selectedColour">
                  <div className="circle" />
                  <font>calm lilac</font>
                </button>
              </div>
              <span className="option">Select Size:</span>
              <div className="sizeOption">
                <button className="size">women</button>
                <button className="size">men</button>
              </div>
              <button className="addToBag">SELECT COLOUR</button>
            </div>
          </div>
          <hr />
          <div className="productDesc">
            <p className="font">Description</p>
            <p>
              Havaianas and Farm came together for this very Brazilian
              partnership: the combination of the comfort you already know from
              the most loved flip-flops in the world with the iconic prints of
              the carioca brand. It had to be right! The Tem Coco 22 model is an
              invitation to enjoy the summer!
            </p>
            <p className="font">Care List</p>
            <p>
              Hand wash with mild soap and a soft brush or in the washing
              machine. Let it dry in a well-ventilated place and... Ready! Your
              Havaianas look brand new!
            </p>
            <p className="font">Details</p>
            <p>
              Color: Country Green Sole Type: Traditional Sole print: Printed
              Strip type: Regular Monocolor Care:
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailPage;
