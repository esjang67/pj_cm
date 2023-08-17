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

      <div className="m-logo" onClick={() => navigate("/")}>
        <i className="fa-solid fa-house" />
      </div>
      <div className="menu">
        <ul className="menuUl">
          <li className="m-area limouse" onClick={() => navigate("/area")}>
            박물관
          </li>
          <li className="m-mark limouse" onClick={() => navigate("/mark")}>
            북마크
          </li>
          <li className="m-review limouse" onClick={() => navigate("/review")}>
            리뷰
          </li>
          <li className="menu-user">{loginMsg}</li>
          <li className='m-login limouse' onClick={onLoginHandler}>{logInOut}</li>
          {
            (logInOut === 'LOGIN') ? 
            <li className='m-join limouse' onClick={() => navigate("/member/join")}>JOIN</li>
            :null
          }
        </ul> 
      </div>
    </div>
  );
}

export default Header;


