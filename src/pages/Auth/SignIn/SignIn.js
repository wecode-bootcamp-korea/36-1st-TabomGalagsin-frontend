import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToUrl } from '../../../utils';
import './signIn.scss';

function SignIn() {
  const navigate = useNavigate();
  const [error, setError] = useState({ email: '', password: '' });
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });
  const { email, password } = inputValue;
  const onChangeSignIn = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    isValidSignIn(e);
  };

  const isValidSignIn = e => {
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
      } else if (value.length < 4) {
        setError({ ...error, [name]: '비밀번호를 확인해주세요.' });
      } else {
        setError({ ...error, [name]: '' });
      }
    }
  };

  const validSignIn = e => {
    e.preventDefault();
    fetch('http://10.58.0.250:3000/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: inputValue.email,
        password: inputValue.password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.accessToken) {
          localStorage.setItem('token', data.accessToken);
          goToUrl(navigate, '/');
        } else {
          alert('아이디 또는 비밀번호를 확인해주세요');
        }
      });
  };

  return (
    <form className="signIn" onSubmit={validSignIn}>
      <div className="emailForm">
        <label className="formLabel">
          <font className="labelFont">이메일</font>
          <input
            name="email"
            className="inputEmail"
            value={email}
            onChange={onChangeSignIn}
          />
        </label>
        <div className="errorMessage">
          <span>{error.email}</span>
        </div>
      </div>
      <div className="passswordForm">
        <label className="formLabel">
          <font className="labelFont">비밀번호</font>
          <input
            name="password"
            type="password"
            value={password}
            className="inputPassword"
            onChange={onChangeSignIn}
          />
        </label>
        <div className="errorMessage">
          <span>{error.password}</span>
        </div>
      </div>
      <button type="submit" className="loginBtn">
        로그인
      </button>
    </form>
  );
}

export default SignIn;
