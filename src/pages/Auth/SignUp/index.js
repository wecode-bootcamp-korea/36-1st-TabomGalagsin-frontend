import './signUp.scss';

function SignupInput() {
  return (
    <form className="signup-content">
      <div className="email-form">
        <label className="form-label">
          <font className="label-font">이메일</font>
          <input name="email" className="input-email" />
        </label>
      </div>
      <div className="name-form">
        <label className="form-label">
          <font className="label-font">이름</font>
          <input name="name" className="input-name" />
        </label>
      </div>
      <div className="nickname-form">
        <label className="form-label">
          <font className="label-font">닉네임</font>
          <input name="nickname" className="input-nickname" />
        </label>
      </div>
      <div className="address-form">
        <label className="form-label">
          <font className="label-font">주소</font>
          <input name="address" className="input-address" />
        </label>
      </div>
      <div className="passsword-form">
        <label className="form-label">
          <font className="label-font">비밀번호</font>
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
