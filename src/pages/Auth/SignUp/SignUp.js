import React from 'react';
import './SignUp.scss';

function SignUp({ inputValue, setInputValue }) {
  const { email, password, firstName, lastName, nickName, address } =
    inputValue;

  const onChangeSignUp = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <form className="signUp">
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
      </div>
      <button type="submit" className="signupBtn">
        회원가입
      </button>
    </form>
  );
}

export default SignUp;
