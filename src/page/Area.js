import { useState } from "react";
import AreaList from "../component/AreaList";
import MuseumGrid from "../component/MuseumGrid";

function Area() {
  const [area, setArea] = useState("All");
  // console.log('area', area)
  return (
    <div className="Area">
      <div className="local">
        <AreaList setArea={setArea} />
      </div>
      <div className="container">
        <MuseumGrid areaName={area} />
      </div>
    </div>
  );
}

export default Area;
