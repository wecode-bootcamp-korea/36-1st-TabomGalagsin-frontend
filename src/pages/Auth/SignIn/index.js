import './signIn.scss';
import { useState } from 'react';

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

  const IsValidate = () => {
    if (inputs.email === '') {
      return '필수 입력창입니다.';
    } else if (inputs.email.indexOf('@') === -1) {
      return '이메일 형식을 확인해주세요.';
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className="login-content" onSubmit={handleSubmit}>
      <div className="email-form">
        <label className="form-label">
          <font className="label-font">이메일</font>
          <input
            name="email"
            onChange={handleInput}
            value={email}
            className="input-email"
          />
        </label>
        <div className="error-message">
          <span>{IsValidate()}</span>
        </div>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          <font className="label-font">비밀번호</font>
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
