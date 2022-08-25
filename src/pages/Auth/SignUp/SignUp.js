import React, { useState } from 'react';
import './signUp.scss';

function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nickName: '',
    address: '',
  });
  const { email, password, firstName, lastName, nickName, address } =
    inputValue;
  const [error, setError] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nickName: '',
    address: '',
  });

  const onChangeSignUp = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    isValidSignUp(e);
  };

  const isValidSignUp = e => {
    const { name, value } = e.target;
    if (name === 'email') {
      if (value === '') {
        setError({ ...error, [name]: '필수 입력 항목입니다.' });
      } else if (value.indexOf('@') === -1) {
        setError({ ...error, [name]: '이메일을 확인해주세요.' });
      } else {
        setError({ ...error, [name]: '' });
      }
    } else if (name === 'password') {
      if (value === '') {
        setError({ ...error, [name]: '필수 입력 항목입니다.' });
      } else if (value.length < 5) {
        setError({ ...error, [name]: '비밀번호를 확인해주세요.' });
      } else {
        setError({ ...error, [name]: '' });
      }
    } else if (
      name === 'firstName' ||
      name === 'lastName' ||
      name === 'nickName' ||
      name === 'address'
    ) {
      if (value === '') {
        setError({ ...error, [name]: '필수 입력 항목입니다.' });
      } else {
        setError({ ...error, [name]: '' });
      }
    }
  };

  const validSignUp = e => {
    e.preventDefault();
    fetch('http://10.58.0.250:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName,
        nickName: nickName,
        address: address,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'userCreated') {
          alert('회원가입을 축하합니다! 로그인 해주세요');
          window.location.replace('/login');
        } else {
          alert('올바른 회원가입 양식이 아닙니다.');
        }
      });
  };

  return (
    <form className="signUp" onSubmit={validSignUp}>
      <div className="emailForm">
        <label className="formLabel">
          <font className="labelFont">이메일</font>
          <input
            name="email"
            className="inputEmail"
            value={email}
            onChange={onChangeSignUp}
          />
        </label>
        <div className="errorMessage">
          <span>{error.email}</span>
        </div>
      </div>
      <div className="nameFormWrap">
        <div className="nameForm">
          <label className="formLabel">
            <font className="labelFont">이름</font>
            <input
              name="firstName"
              className="inputName"
              value={firstName}
              onChange={onChangeSignUp}
            />
          </label>
          <div className="errorMessage">
            <span>{error.firstName}</span>
          </div>
        </div>
        <div className="nameForm">
          <label className="formLabel">
            <font className="labelFont">성</font>
            <input
              name="lastName"
              className="inputName"
              value={lastName}
              onChange={onChangeSignUp}
            />
          </label>
          <div className="errorMessage">
            <span>{error.lastName}</span>
          </div>
        </div>
      </div>
      <div className="nicknameForm">
        <label className="formLabel">
          <font className="labelFont">닉네임</font>
          <input
            name="nickName"
            className="inputNickname"
            value={nickName}
            onChange={onChangeSignUp}
          />
        </label>
        <div className="errorMessage">
          <span>{error.nickName}</span>
        </div>
      </div>
      <div className="addressForm">
        <label className="formLabel">
          <font className="labelFont">주소</font>
          <input
            name="address"
            className="inputAddress"
            value={address}
            onChange={onChangeSignUp}
          />
        </label>
        <div className="errorMessage">
          <span>{error.address}</span>
        </div>
      </div>
      <div className="passwordForm">
        <label className="formLabel">
          <font className="labelFont">비밀번호</font>
          <input
            name="password"
            type="password"
            className="inputPassword"
            value={password}
            onChange={onChangeSignUp}
          />
        </label>
        <div className="errorMessage">
          <span>{error.password}</span>
        </div>
      </div>
      <button type="submit" className="signupBtn">
        회원가입
      </button>
    </form>
  );
}

export default SignUp;
