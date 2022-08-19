import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="login-field">
      <div className="login-box">
        <ul className="login-nav">
          <li className="nav-item">
            <div className="login-nav">
              <font id="login-text">로그인</font>
            </div>
          </li>
          <li className="nav-item">
            <div className="signup-nav">
              <font id="signup-text">계정 만들기</font>
            </div>
          </li>
        </ul>
        <form className="login-content">
          <div className="email-form">
            <label className="form-label">
              이메일
              <input type="text" className="input-email" />
            </label>
          </div>
          <div className="passsword-form">
            <label className="form-label">
              비밀번호
              <input type="password" className="input-password" />
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
