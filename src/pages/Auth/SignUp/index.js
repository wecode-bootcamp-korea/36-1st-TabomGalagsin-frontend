import './signUp.scss';

function SignupInput() {
  return (
    <form className="signup-content">
      <div className="email-form">
        <label className="form-label">
          이메일
          <input name="email" className="input-email" />
        </label>
      </div>
      <div className="name-form">
        <label className="form-label">
          이름
          <input name="name" className="input-name" />
        </label>
      </div>
      <div className="nickname-form">
        <label className="form-label">
          닉네임
          <input name="nickname" className="input-nickname" />
        </label>
      </div>
      <div className="address-form">
        <label className="form-label">
          주소
          <input name="address" className="input-address" />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          비밀번호
          <input name="password" type="password" className="input-password" />
        </label>
      </div>
      <button type="submit" className="signup-btn">
        회원가입
      </button>
    </form>
  );
}

export default SignupInput;
