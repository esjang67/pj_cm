import { useEffect } from 'react';
import axios from 'axios';
import axiosJsonp from 'axios-jsonp';
// import SetData from './SetData';
import useSetData from '../hooks/useSetData';

const key = '00BB282F-DCAE-3E24-A85A-6FA4A7221CDF';
const domain = 'localhost:3000';
const geomFilter = 'POLYGON((124.822976 38.612351,130.949850 38.612351,130.949850 33.158684,124.822976 33.158684,124.822976 38.612351))'
const colnames = `mus_nam,mus_typ,new_adr,opr_tel,wds_tme,wde_tme,hds_tme,hde_tme,hdy_inf,adt_fee,yot_fee,chd_fee`;
// const size = 'size=max(1000)';
//https://www.vworld.kr/dev/v4dv_2ddataguide2_s002.do?svcIde=dgmuseumart
const URL = `https://api.vworld.kr/req/data?service=data&request=GetFeature&data=LT_P_DGMUSEUMART`
          + `&key=${key}&domain=${domain}&geomFilter=${geomFilter}&columns=${colnames}&size=1000&page=1&attrFilter=mus_typ:=:국립`;

//response.result.featureCollection.features[0].properties.mus_nam

// id : LT_P_DGMUSEUMART.1

// 속성명	단일검색*	샘플데이터	        설명
// mus_nam	N	      관세박물관	       시설명
// mus_typ	N	      국립		          박물관미술관구분
// new_adr	N	      서울특별시 강남구 언주로 721	소재지도로명주소
// opr_tel	N	      02-510-1082	      운영기관전화번호
// wds_tme	N	      09:30		평일관람시작시각
// wde_tme	N	      18:00		평일관람종료시각
// hds_tme	N	      0:00		공휴일관람시작시각
// hde_tme	N	      0:00		공휴일관람종료시각
// hdy_inf	N	      공휴일		휴관정보
// adt_fee	N	      0		어른관람료
// yot_fee	N	      0		청소년관람료
// chd_fee	N	      0		어린이관람료

// opr_nam	N	      관세박물관	       운영기관명
// mng_tel	N	      02-510-1082	관리기관전화번호
// mng_nam	N	      서울특별시 강남구청	관리기관명
// reg_dat	N	      2017-04-17	데이터기준일자
// ag_geom	N	      POINT(...)	GEOMETRY 데이터


function Mdata() {

  // let getData;
  // console.log( String('LT_P_DGMUSEUMART.1').split('.')[1]); // id
  // console.log(URL)
  
  useEffect(() => {

    axios({
      url : URL,
      adapter : axiosJsonp
    })
      .then((response) => {
        // console.log(response.data);
        const data = response.data;
        const data1 = data.response.result.featureCollection.features;
        // console.log("a", data1);
        // console.log('b', data1.features.length);
        // getData = data1;
        const aa = useSetData(data1);
        
      })
      .catch((err)=> alert(err))

  }, []);


  // return (
  //   <div className="Mdata">
      
  //   </div>
  // );
}

export default Mdata;