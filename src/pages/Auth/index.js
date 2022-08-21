import React, { useState } from 'react';
import './auth.scss';
import LoginInput from '../Auth/SignIn/index';
import SingupInput from '../Auth/SignUp/index';

function Auth() {
  const [currentId, setcurrentId] = useState(1);
  const MappingObject = {
    1: <LoginInput />,
    2: <SingupInput />,
  };
  const clickHandler = id => {
    setcurrentId(id);
  };

  const Switch = ['로그인', '회원가입'];

  return (
    <div className="login-field">
      <div className="login-box">
        <ul className="login-nav">
          {Switch.map((sw, index) => {
            return (
              <li
                className="nav-item"
                key={sw + index}
                onClick={() => clickHandler(index + 1)}
              >
                <div className="login-nav">
                  <font id="login-text">{sw}</font>
                </div>
              </li>
            );
          })}
        </ul>
        {MappingObject[currentId]}
      </div>
    </div>
  );
}

export default Auth;
