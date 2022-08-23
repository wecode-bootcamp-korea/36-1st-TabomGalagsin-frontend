import React from 'react';
import './SignUp.scss';

function SignUp() {
  return (
    <form className="signUp">
      <div className="emailForm">
        <label className="formLabel">
          <font className="labelFont">이메일</font>
          <input name="email" className="inputEmail" />
        </label>
      </div>
      <div className="nameFormWrap">
        <div className="nameForm">
          <label className="formLabel">
            <font className="labelFont">이름</font>
            <input name="name" className="inputName" />
          </label>
        </div>
        <div className="nameForm">
          <label className="formLabel">
            <font className="labelFont">성</font>
            <input name="name" className="inputName" />
          </label>
        </div>
      </div>
      <div className="nicknameForm">
        <label className="formLabel">
          <font className="labelFont">닉네임</font>
          <input name="nickname" className="inputNickname" />
        </label>
      </div>
      <div className="addressForm">
        <label className="formLabel">
          <font className="labelFont">주소</font>
          <input name="address" className="inputAddress" />
        </label>
      </div>
      <div className="passwordForm">
        <label className="formLabel">
          <font className="labelFont">비밀번호</font>
          <input name="password" type="password" className="inputPassword" />
        </label>
      </div>
      <button type="submit" className="signupBtn">
        회원가입
      </button>
    </form>
  );
}

export default SignUp;
