import React, { useState } from 'react';
import './SignIn.scss';

function SignIn({ inputValue, setInputValue }) {
  const { email, password } = inputValue;
  const [error, setError] = useState({ email: '', password: '' });

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
      } else if (value.length < 5) {
        setError({ ...error, [name]: '비밀번호를 확인해주세요.' });
      } else {
        setError({ ...error, [name]: '' });
      }
    }
  };

  return (
    <form className="signIn">
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
