import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { goToUrl } from '../../../utils.js';
import Dropdown from './Dropdown/Dropdown';
import NavCart from './NavCart/NavCart';
import './NavBottomContainer.scss';

function NavBottomContainer({ color, cartedCount, setCartedCount }) {
  const navigate = useNavigate();
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [userToken, setUserToken] = useState(localStorage.getItem('token'));

  return (
    <div className="navBottomContainer">
      <div className={`navbar ${color}`}>
        <div className="navIconWrapper flipflopCursor">
          <div
            onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
            onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
          >
            <i className="fa-solid fa-bars navIcon menu" />
            {isMouseEnter && <Dropdown />}
          </div>
          <div className="linkComponent">
            <img
              className="logo flipflopCursor"
              src="/images/Nav/logo-yellow.png"
              alt="logo"
              onClick={() => goToUrl(navigate, '/')}
            />
          </div>
          <div className="iconLeftSide">
            {!userToken ? (
              <div
                onClick={() => goToUrl(navigate, '/login')}
                className="navIconWrap flipflopCursor"
              >
                <i className="fa-solid fa-user navIcon flipflopCursor" />
              </div>
            ) : (
              <div
                className="navIconWrap flipflopCursor"
                onClick={() => {
                  localStorage.removeItem('token');
                  localStorage.removeItem('totalProduct');
                  setUserToken('');
                  setCartedCount(0);
                  alert('로그아웃 되었습니다!!!!!');
                  goToUrl(navigate, '/login');
                }}
              >
                <i class="fa-solid fa-arrow-right-from-bracket navIcon flipflopCursor" />
              </div>
            )}
            <div
              className="navIconWrap flipflopCursor"
              onMouseEnter={() => setIsHover(!isHover)}
              onMouseLeave={() => setIsHover(!isHover)}
            >
              <i className="fa-solid fa-basket-shopping navIcon flipflopCursor" />
              {cartedCount > 0 && (
                <div className="cartedCount ">{cartedCount}</div>
              )}
              {isHover && <NavCart setCartedCount={setCartedCount} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBottomContainer;
