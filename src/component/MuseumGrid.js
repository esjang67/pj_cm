import './MuseumGrid.css'
// main, area, subject, mark에서 사용됨

import { useSelector } from "react-redux";
import MuseumItem from "./MuseumItem";
// import { useState } from 'react';


function MuseumGrid({areaName}) {

  const { museum } = useSelector(state=>state);

  // const [searchArea, setSerchArea] = useState([]);

  console.log('MuseumGrid', areaName)
  if(areaName==='All'){
    return(
      <div className="MuseumGrid">
        <h3>전체 박물관</h3>
        <div className='list'>
          {
            museum.map((Mdata) => {
              return(
                <MuseumItem key={Mdata.id} data={Mdata} />
              )
            })
          }
        </div>
      </div>
    )
  } else {
    // 박물관 주소 첫번째단어(지역명)이 areaName와 같은 박물관만
    const aaaaa = museum.filter((data) => String(data.new_adr).split(' ')[0] === areaName)
    // setSerchArea(museum.filter((data) => String(data.new_adr).split(' ')[0] === areaName))
    console.log(aaaaa)

    return(
      <div className="MuseumGrid">
        <h3>{areaName}</h3>
        <div className='list'>
          {
            aaaaa.map((Mdata) => {
              return(
                <MuseumItem key={Mdata.id} data={Mdata} />
              )
            })
          }
        </div>
      </div>
    )
  }

}
export default MuseumGrid;