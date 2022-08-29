import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { goToUrl } from '../../../utils';
import request from '../../../utils/axiosClient';
import './signIn.scss';

function SignIn() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({ email: '', password: '' });
  const [inputValue, setInputValue] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    isValidSignIn(e);
  };

  const isValidSignIn = e => {
    const { name, value } = e.target;

    if (name === 'email') {
      if (value === '') {
        setErrorMessage({ ...errorMessage, [name]: '필수 입력 항목입니다.' });
      } else if (value.indexOf('@') === -1) {
        setErrorMessage({ ...errorMessage, [name]: '이메일을 확인해주세요.' });
      } else {
        setErrorMessage({ ...errorMessage, [name]: '' });
      }
    }

    if (name === 'password') {
      if (value === '') {
        setErrorMessage({ ...errorMessage, [name]: '필수 입력 항목입니다.' });
      } else if (value.length < 4) {
        setErrorMessage({
          ...errorMessage,
          [name]: '비밀번호를 확인해주세요.',
        });
      } else {
        setErrorMessage({ ...errorMessage, [name]: '' });
      }
    }
  };

  // const handleRequest = () => {
  //   fetch('http://10.58.0.250:3000/users/login', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       email: inputValue.email,
  //       password: inputValue.password,
  //     }),
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       if (data.accessToken) {
  //         localStorage.setItem('token', data.accessToken);
  //         goToUrl(navigate, '/');
  //       } else {
  //         alert('아이디 또는 비밀번호를 확인해주세요');
  //       }
  //     });
  // };

  const handleRequest = async () => {
    try {
      const response = await request({
        url: '/users/login',
        method: 'post',
        data: {
          email: inputValue.email,
          password: inputValue.password,
        },
      });

      if (response.accessToken) {
        localStorage.setItem('token', response.accessToken);
        goToUrl(navigate, '/');
      } else {
        alert('아이디 또는 비밀번호를 확인해주세요');
      }
    } catch (e) {
      console.log(e);
    }

    // fetch('http://10.58.0.250:3000/users/login', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     email: inputValue.email,
    //     password: inputValue.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     if (data.accessToken) {
    //       localStorage.setItem('token', data.accessToken);
    //       goToUrl(navigate, '/');
    //     } else {
    //       alert('아이디 또는 비밀번호를 확인해주세요');
    //     }
    //   });

    // fetch('url')
    //   .then(res => res.json())
    //   .then(data => setData(data));

    // const res = await fetch('url');
    // const data = res.json();
    // setData(data);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!inputValue.email || !inputValue.password) {
      return setErrorMessage({
        email: '필수 입력 항목입니다.',
        password: '필수 입력 항목입니다.',
      });
    }
    if (errorMessage.email || errorMessage.password) return;
    console.log('isWork?');
    handleRequest();
  };

  return (
    <form className="signIn" onSubmit={handleSubmit}>
      <div className="emailForm">
        <label className="formLabel">
          <font className="labelFont">이메일</font>
          <input
            name="email"
            className="inputEmail"
            value={inputValue.email}
            onChange={handleChange}
          />
        </label>
        <div className="errorMessage">
          <span>{errorMessage.email}</span>
        </div>
      </div>
      <div className="passswordForm">
        <label className="formLabel">
          <font className="labelFont">비밀번호</font>
          <input
            name="password"
            type="password"
            value={inputValue.password}
            className="inputPassword"
            onChange={handleChange}
          />
        </label>
        <div className="errorMessage">
          <span>{errorMessage.password}</span>
        </div>
      </div>
      <button
        type="submit"
        className="loginBtn"
        // onClick={() => {
        //   Object.keys(inputValue).forEach(key => {
        //     !inputValue.key &&
        //       setErrorMessage(
        //         prev => (prev = { ...prev, [key]: '필수 입력 항목입니다.' })
        //       );
        //   });
        // }}
      >
        로그인
      </button>
    </form>
  );
}

export default SignIn;
