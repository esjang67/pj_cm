import { useDispatch } from "react-redux";
import { setMuseum } from "../redux/MuseumSlice";
import axios from "axios";
import axiosJsonp from "axios-jsonp";

const key = "00BB282F-DCAE-3E24-A85A-6FA4A7221CDF";
const domain = "localhost:3000";
const geomFilter =
  "POLYGON((124.822976 38.612351,130.949850 38.612351,130.949850 33.158684,124.822976 33.158684,124.822976 38.612351))";
const colnames = `mus_nam,mus_typ,new_adr,opr_tel,wds_tme,wde_tme,hds_tme,hde_tme,hdy_inf,adt_fee,yot_fee,chd_fee`;

const URL =
  `https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_P_DGMUSEUMART` +
  `&key=${key}&domain=${domain}&geomFilter=${geomFilter}&columns=${colnames}&size=1000&page=1&attrFilter=mus_typ:=:국립`;

let tmp = [];
let result;

function Mdata() {
  const dispatch = useDispatch();

  axios({
    url: URL,
    adapter: axiosJsonp,
  })
    .then((response) => {
      const data = response.data;
      result = data.response.result.featureCollection.features;
      // console.log("result", result);
    })
    .then(() => {
      result.forEach((Mdata) => {
        tmp.push({
          id: String(Mdata.id).split(".")[1], //LT_P_DGMUSEUMART.1에서 숫자만 가져와 id로 만듬
          mus_nam: Mdata.properties.mus_nam,
          mus_typ: Mdata.properties.mus_typ,
          // logo_src: "../img/국립중앙박물관.jpg",
          new_adr: Mdata.properties.new_adr,
          area_adr: String(Mdata.properties.new_adr).split(" ")[0], // 지역따로 저장
          opr_tel: Mdata.properties.opr_tel,
          // 평일
          wds_tme: Mdata.properties.wds_tme,
          wde_tme: String(Mdata.properties.wde_tme).substring(0, 5), // "17:00:00.000",
          // 휴일
          hds_tme: Mdata.properties.hds_tme,
          hde_tme: String(Mdata.properties.hde_tme).substring(0, 5),
          // 휴관정보
          hdy_inf: String(Mdata.properties.hdy_inf).replace("+", " "), // 추가될때 + 로 빈칸채움 변경할것!
          //가격
          adt_fee: Mdata.properties.adt_fee,
          chd_fee: Mdata.properties.chd_fee,
          yot_fee: Mdata.properties.yot_fee,
        });
      });
      // console.log("tmp", tmp);
      dispatch(setMuseum(tmp));
    })
    .catch((err) => console.log(err));

}
export default Mdata;

// // id : LT_P_DGMUSEUMART.1

// // 속성명	단일검색*	샘플데이터	        설명
// // mus_nam	N	      관세박물관	       시설명
// // mus_typ	N	      국립		          박물관미술관구분
// // new_adr	N	      서울특별시 강남구 언주로 721	소재지도로명주소
// // opr_tel	N	      02-510-1082	      운영기관전화번호
// // wds_tme	N	      09:30		평일관람시작시각
// // wde_tme	N	      18:00		평일관람종료시각
// // hds_tme	N	      0:00		공휴일관람시작시각
// // hde_tme	N	      0:00		공휴일관람종료시각
// // hdy_inf	N	      공휴일		휴관정보
// // adt_fee	N	      0		어른관람료
// // yot_fee	N	      0		청소년관람료
// // chd_fee	N	      0		어린이관람료

// // opr_nam	N	      관세박물관	       운영기관명
// // mng_tel	N	      02-510-1082	관리기관전화번호
// // mng_nam	N	      서울특별시 강남구청	관리기관명
// // reg_dat	N	      2017-04-17	데이터기준일자
// // ag_geom	N	      POINT(...)	GEOMETRY 데이터