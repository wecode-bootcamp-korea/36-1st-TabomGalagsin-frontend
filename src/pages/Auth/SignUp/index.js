function SingupInput() {
  return (
    <form className="login-content">
      <div className="email-form">
        <label className="form-label">
          이메일
          <input name="email" className="input-email" />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          이메일 확인
          <input name="password" type="password" className="input-password" />
        </label>
      </div>
      <div className="email-form">
        <label className="form-label">
          이름
          <input name="email" className="input-email" />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          비밀번호
          <input name="password" type="password" className="input-password" />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          비밀번호 확인
          <input name="password" type="password" className="input-password" />
        </label>
      </div>
      <button type="submit" className="login-btn">
        회원가입
      </button>
    </form>
  );
}

export default SingupInput;
