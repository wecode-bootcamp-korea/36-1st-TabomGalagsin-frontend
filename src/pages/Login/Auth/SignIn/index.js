import './signIn.scss';

function LoginInput() {
  return (
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
  );
}

export default LoginInput;
