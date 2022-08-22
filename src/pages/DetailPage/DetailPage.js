import { Link } from 'react-router-dom';
import './DetailPage.scss';

function DetailPage() {
  return (
    <div className="detailPage">
      <div className="container">
        <div className="productNavigation">
          <Link to="/" className="link">
            Brasil &nbsp;&nbsp;&nbsp;
          </Link>
          <span> >&nbsp;&nbsp;&nbsp;</span>
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
                <font>calm lilac</font>
              </button>
              <button>
                <font>crystal rose</font>
              </button>
              <button>
                <font>blue water</font>
              </button>
              <button>
                <font>red crush</font>
              </button>
              <button>
                <font>lemon yellow</font>
              </button>
            </div>
            <button>SELECT COLOUR</button>
          </div>
        </div>
        <div className="productDesc">
          <p>Description</p>
          <p>
            Havaianas and Farm came together for this very Brazilian
            partnership: the combination of the comfort you already know from
            the most loved flip-flops in the world with the iconic prints of the
            carioca brand. It had to be right! The Tem Coco 22 model is an
            invitation to enjoy the summer!
          </p>
          <p>Care List</p>
          <p>
            Hand wash with mild soap and a soft brush or in the washing machine.
            Let it dry in a well-ventilated place and... Ready! Your Havaianas
            look brand new!
          </p>
          <p>Details</p>
          <p>
            Color: Country Green Sole Type: Traditional Sole print: Printed
            Strip type: Regular Monocolor Care:
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
