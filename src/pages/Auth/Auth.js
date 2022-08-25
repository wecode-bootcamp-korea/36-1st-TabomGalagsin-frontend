import React, { useState } from 'react';
import './auth.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

function Auth() {
  const [currentId, setCurrentId] = useState(false);

  return (
    <div>
      <Nav />
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
                <font
                  className={
                    currentId
                      ? 'loginText flipflopCursor'
                      : 'clickedLoginText flipflopCursor'
                  }
                >
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
                <font
                  className={
                    currentId
                      ? 'clickedLoginText flipflopCursor'
                      : 'loginText flipflopCursor'
                  }
                >
                  회원가입
                </font>
              </div>
            </li>
          </ul>
          {currentId ? <SignUp /> : <SignIn />}
        </div>
      </div>
      <Footer backgroundColor="pink" />
    </div>
  );
}

export default Auth;
