import BestSeller from './BestSeller/BestSeller';
import Nav from '../../components/Nav/Nav';

import './Main.scss';

function Main() {
  return (
    <>
      <Nav />
      <div className="main">
        <h1>Main입니다.</h1>
        <BestSeller />
      </div>
    </>
  );
}

export default Main;
