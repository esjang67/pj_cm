import Banner from "../component/Banner";
import Event from "../component/Event";
import Notice from "../component/Notice";

import "../pageCss/Main.css";
function Main() {
  return (
    <div className="Main">
      <div className="main-banner">
        <Banner />
      </div>
      <div className="main-bottom">
        <div className="main-notice">
          <Notice />
        </div>

        <div className="main-event">
          <Event />
        </div>
      </div>
      
      <div className="main-msg">
        <i className="fa-regular fa-comment"/>     
        <span>본 웹페이지의 기본사이즈 1200px입니다.</span><br/>
      </div>
      
{/* 
      <div className="main_top10">
        <h4>인기 Top</h4>
        <MuseumGrid className="museumTop" areaName="Top" />
      </div> */}
    </div>
  );
}

export default Main;
