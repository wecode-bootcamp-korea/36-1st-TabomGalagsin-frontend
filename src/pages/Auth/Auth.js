import React, { useState } from 'react';
import './Auth.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function Auth() {
  const [currentId, setCurrentId] = useState(false);

  return (
    <div className="loginField">
      <div className="loginBox">
        <ul className="loginNav">
          <li
            className="navItem"
            onClick={() => {
              setCurrentId(false);
            }}
          >
            <div className="loginNavFont">
              <font className={currentId ? 'loginText' : 'clickedLoginText'}>
                로그인
              </font>
            </div>
          </li>
          <li
            className="navItem"
            onClick={() => {
              setCurrentId(true);
            }}
          >
            <div className="loginNavFont">
              <font className={currentId ? 'clickedLoginText' : 'loginText'}>
                회원가입
              </font>
            </div>
          </li>
        </ul>
        {currentId ? <SignUp /> : <SignIn />}
      </div>
    </div>
  );
}

export default Auth;
