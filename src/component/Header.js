import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <div className="Header">

      <div className="menu-left">
        <div className="m-logo" onClick={() => navigate("/")}>
        <i class="fa-solid fa-house"></i>
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
        <div onClick={() => navigate("/member/login")}>LOGIN</div>
        <div onClick={() => navigate("/member/join")}>JOIN</div>
      </div> 

    </div>
  );
}

export default Header;


