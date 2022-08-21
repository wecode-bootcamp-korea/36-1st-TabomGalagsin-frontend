import './signIn.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginInput() {
  // response를 담을 상태 하나 만들기
  // 해당 상태가 JWT TOEKN을 가지고 있으면 스토리지나 쿠키에 저장
  // 상태가 에러를 담고있으면 로그인 실패 핸들링
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const { email, password } = inputs;

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const IsValidate =
    inputs.email.indexOf('@') !== -1 &&
    inputs.email.length >= 6 &&
    inputs.password.length >= 5;

  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
      }),
    })
      .then(response => response.json())
      .then(data => localStorage.setItem('token', JSON.stringify(data)));
    if (localStorage.token) {
      navigate('/main');
    }
  };

  return (
    <form className="login-content" onSubmit={handleSubmit}>
      <div className="email-form">
        <label className="form-label">
          이메일
          <input
            name="email"
            onChange={handleInput}
            value={email}
            className="input-email"
          />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          비밀번호
          <input
            name="password"
            onChange={handleInput}
            value={password}
            type="password"
            className="input-password"
          />
        </label>
      </div>
      <button type="submit" className="login-btn">
        로그인
      </button>
    </form>
  );
}

export default LoginInput;
