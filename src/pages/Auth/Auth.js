import React, { useState } from 'react';
import './Auth.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function Auth() {
  const [currentId, setCurrentId] = useState(1);

  return (
    <div className="loginField">
      <div className="loginBox">
        <ul className="loginNav">
          <li
            className="navItem"
            onClick={() => {
              setCurrentId(1);
            }}
          >
            <div className="loginNav">
              <font className="loginText">로그인</font>
            </div>
          </li>
          <li
            className="navItem"
            onClick={() => {
              setCurrentId(0);
            }}
          >
            <div className="loginNav">
              <font className="loginText">회원가입</font>
            </div>
          </li>
        </ul>
        {currentId === 1 ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}

export default Auth;
