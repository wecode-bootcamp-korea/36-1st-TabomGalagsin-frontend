import './SignIn.scss';

function SignIn() {
  return (
    <form className="signIn">
      <div className="emailForm">
        <label className="formLabel">
          <font className="labelFont">이메일</font>
          <input name="email" className="inputEmail" />
        </label>
        <div className="errorMessage">
          <span>instance</span>
        </div>
      </div>
      <div className="passswordForm">
        <label className="formLabel">
          <font className="labelFont">비밀번호</font>
          <input name="password" type="password" className="inputPassword" />
        </label>
        <div className="errorMessage">
          <span>instance</span>
        </div>
      </div>
      <button type="submit" className="loginBtn">
        로그인
      </button>
    </form>
  );
}

export default SignIn;
