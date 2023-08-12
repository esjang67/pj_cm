function Login() {
  return (
    <div className="Login">
      Login
      <div>
        <form>
          <div>
            <label for="id_txt">아이디</label>
            <input id="id_txt" type="text" placeholder="아이디를 입력하세요." />
          </div>
          <div>
            <label for="pw_txt">비밀번호</label>
            <input
              id="pw_txt"
              type="passoword"
              placeholder="비밀번호를 입력하세요."
            />
          </div>
          <div>
            <button className="btn_cancel">취소</button>
            <button className="btn_login" disabled>
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
