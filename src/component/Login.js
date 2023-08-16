import Button from "../custom/Button";
import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <div className="login-content login-content-signin">
        <h4>Login</h4>
        <div>
          <form className="wrapper-box">
            <input
              type="text"
              className="form-control form-control-id"
              placeholder="ID"
              required
            />
            <input
              type="password"
              className="form-control form-control-password"
              placeholder="Password"
              required
            />
            <div className="form-btn">
              <Button className="btn_login" title='Login' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
