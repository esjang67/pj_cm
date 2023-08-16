import Banner from "../component/Banner";

import "../pageCss/Main.css";
function Main() {
  return (
    <div className="Main">
      <Banner />
      <i className="fa-regular fa-comment"/>
      <p>본 웹페이지의 기본사이즈 1200px입니다.</p>
      
{/* 
      <div className="main_top10">
        <h4>인기 Top</h4>
        <MuseumGrid className="museumTop" areaName="Top" />
      </div> */}
    </div>
  );
}

export default Main;
