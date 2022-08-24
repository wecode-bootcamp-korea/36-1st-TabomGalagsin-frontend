import React, { useState } from 'react';
import './Auth.scss';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

function Auth() {
  const [currentId, setCurrentId] = useState(1);
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nickName: '',
    address: '',
  });

  return (
    <div className="loginField">
      <div className="loginBox">
        <ul className="loginNav">
          <li
            className="navItem"
            onClick={() => {
              setCurrentId(1);
              setInputValue({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                nickName: '',
                address: '',
              });
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
              setInputValue({
                email: '',
                password: '',
                firstName: '',
                lastName: '',
                nickName: '',
                address: '',
              });
            }}
          >
            <div className="loginNav">
              <font className="loginText">회원가입</font>
            </div>
          </li>
        </ul>
        {currentId === 1 ? (
          <SignIn
            inputValue={inputValue}
            setInputValue={setInputValue}
            currentId={currentId}
          />
        ) : (
          <SignUp
            inputValue={inputValue}
            setInputValue={setInputValue}
            currentId={currentId}
          />
        )}
      </div>
    </div>
  );
}

export default Auth;
