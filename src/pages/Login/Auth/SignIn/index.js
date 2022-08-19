import './signIn.scss';
import { useState } from 'react';

function LoginInput() {
  const [inputs, setInputs] = useState({ name: '', password: '' });
  const { name, password } = inputs;
  const onChange = e => {
    console.log(e.target.name);
    console.log(e.target.value);
  };
  return (
    <form className="login-content">
      <div className="email-form">
        <label className="form-label">
          이메일
          <input name="name" onChange={onChange} className="input-email" />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          비밀번호
          <input
            name="password"
            onChange={onChange}
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
