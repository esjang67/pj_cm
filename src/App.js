import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./page/Main";
import Area from "./page/Area";
import Subject from "./page/Subject";
import Museum from "./page/Museum";
import Mark from "./page/Mark";
import Review from "./page/Review";
import Member from "./page/Member";
import { useEffect } from "react";
import axios from "axios";
import axiosJsonp from 'axios-jsonp';
import { useDispatch, useSelector } from "react-redux";
import { setMuseum } from "./redux/MuseumSlice";

const key = '00BB282F-DCAE-3E24-A85A-6FA4A7221CDF';
const domain = 'localhost:3000';
const geomFilter = 'POLYGON((124.822976 38.612351,130.949850 38.612351,130.949850 33.158684,124.822976 33.158684,124.822976 38.612351))'
const colnames = `mus_nam,mus_typ,new_adr,opr_tel,wds_tme,wde_tme,hds_tme,hde_tme,hdy_inf,adt_fee,yot_fee,chd_fee`;

const URL = `https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_P_DGMUSEUMART`
  + `&key=${key}&domain=${domain}&geomFilter=${geomFilter}&columns=${colnames}&size=1000&page=1&attrFilter=mus_typ:=:국립`;

let tmp = [];
let result;

function App() {
  const dispatch = useDispatch();
  const {museum} = useSelector(state => state);

  console.log('m', museum);

  useEffect(() => {
    axios({
      url: URL,
      adapter: axiosJsonp
    })
      .then((response) => {
        const data = response.data;
        result = data.response.result.featureCollection.features;
        console.log('result', result);
      })
      .then(() => {
        result.forEach((Mdata) => {
  
          tmp.push({
            id: String(Mdata.id).split('.')[1],  //LT_P_DGMUSEUMART.1에서 숫자만 가져와 id로 만듬
            mus_nam: Mdata.properties.mus_nam,
            mus_typ: Mdata.properties.mus_typ,
            logo_src: '../img/국립중앙박물관.jpg',
            new_adr: Mdata.properties.new_adr,
            opr_tel: Mdata.properties.opr_tel,
            // 평일
            wds_tme: Mdata.properties.wds_tme,
            wde_tme: String(Mdata.properties.wde_tme).substring(0, 5), // "17:00:00.000",
            // 휴일
            hds_tme: Mdata.properties.hds_tme,
            hde_tme: String(Mdata.properties.hde_tme).substring(0, 5),
            // 휴관정보
            hdy_inf: String(Mdata.properties.hdy_inf).replace('+', ' '),  // 추가될때 + 로 빈칸채움 변경할것!
            //가격
            adt_fee: Mdata.properties.adt_fee,
            chd_fee: Mdata.properties.chd_fee,
            yot_fee: Mdata.properties.yot_fee
          });
  
        })
        console.log('tmp', tmp);
        dispatch(setMuseum(tmp));
    })
      .catch((err) => alert(err))

  }, [dispatch])
  

  return (
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/area" element={<Area />} />
        <Route path="/subject" element={<Subject />} />
        <Route path="/museum/:MID" element={<Museum />} />
        <Route path="/mark" element={<Mark />} />
        <Route path="/review" element={<Review />} />
        <Route path="/member" element={<Member />} />
      </Routes>
    </div>
  );
}

export default App;