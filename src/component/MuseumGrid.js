import "./MuseumGrid.css";
// main, area, subject, mark에서 사용됨

import { useSelector } from "react-redux";
import MuseumItem from "./MuseumItem";
// import { useState } from 'react';

function MuseumGrid({ areaName }) {
  const { museum } = useSelector((state) => state);

  if (areaName === "Top") {
    const top = museum.slice(0, 10);

    return (
      <div className="MuseumGrid">
        <div className="list">
          {top.map((Mdata) => {
            return <MuseumItem key={Mdata.id} data={Mdata} />;
          })}
        </div>
      </div>
    );
  }
  //--------------------------
  if (areaName === "All") {
    return (
      <div className="MuseumGrid">
        <h4>전체 박물관</h4>
        <div className="list">
          {museum.map((Mdata) => {
            return <MuseumItem key={Mdata.id} data={Mdata} />;
          })}
        </div>
      </div>
    );
  } else {
    const aaaaa = museum.filter((data) => data.area_adr === areaName);

    return (
      <div className="MuseumGrid">
        <h4><i className="fa-solid fa-location-crosshairs" /> {areaName}</h4>
        <div className="list">
          <>
          {aaaaa.map((Mdata) => {
            return <MuseumItem key={Mdata.id} data={Mdata} />;
          })}
          </>
        </div>
      </div>
    );
  }
}
export default MuseumGrid;
