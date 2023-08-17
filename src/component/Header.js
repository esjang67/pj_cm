import Mdata from "../data/Mdata";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header({user, setUser }) {
  const navigate = useNavigate();
  let logInOut = (user !== undefined) ? 'LOGOUT' : 'LOGIN'

  const onLoginHandler = (e) => {

    if(e.target.innerText === 'LOGIN' ){
      navigate("/member/login")
    } else {
      if(window.confirm("로그아웃하시겠습니까?")){
        setUser(undefined);
        navigate('/');
      }
    }
  } 

  let loginMsg = (user!==undefined)? `${user}님 환영합니다.`:''
  
  return (
    <div className="Header">
      <Mdata/>

      <div className="menu-left">
        <div className="m-logo" onClick={() => navigate("/")}>
          <i className="fa-solid fa-house" />
        </div>
        <div className="m-area" onClick={() => navigate("/area")}>
          박물관
        </div>
        <div className="m-mark" onClick={() => navigate("/mark")}>
          북마크
        </div>
        <div className="m-review" onClick={() => navigate("/review")}>
          리뷰
        </div>
      </div>
      <div className="menu-right">
        <div className="menu-user">{loginMsg}</div>
        <div onClick={onLoginHandler}>{logInOut}</div>
        {
          (logInOut === 'LOGIN') ? 
          <div onClick={() => navigate("/member/join")}>JOIN</div>
          :null
        }
      </div> 

    </div>
  );
}

export default Header;


