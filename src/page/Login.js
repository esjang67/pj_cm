import { useState } from "react";
import Button from "../custom/Button";
import "../pageCss/Login.css";
import { useNavigate } from "react-router-dom";

function Login( { setUser }) {

  const navigate = useNavigate();
  const [id, setId] = useState();

  const onLoginHandler = () => {
    setUser(id)
    navigate('/')
  };

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
              onChange={(e) => {
                setId(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control form-control-password"
              placeholder="Password"
              required
            />
            <div className="form-btn">
              <Button
                className="btn_login"
                title="Login"
                onClickHandler={onLoginHandler}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
