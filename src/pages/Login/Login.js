import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="login-field">
      <div className="login-box">
        <ul className="login-nav">
          <li id="login-text" className="nav-item">
            로그인
          </li>
          <li id="signup-text" className="nav-item">
            계정만들기
          </li>
        </ul>
        <form className="login-content">
          <div className="email-form">
            <label className="form-label">
              <font>이메일</font>
              <input className="input-email" />
            </label>
          </div>
          <div className="passsword-form">
            <label className="form-label">
              <font>비밀번호</font>
              <input className="input-password" />
            </label>
          </div>
          <button type="submit" className="login-btn">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
