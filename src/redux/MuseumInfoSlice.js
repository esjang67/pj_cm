import { createSlice } from "@reduxjs/toolkit";

// 전체적으로 쓰일 기본정보: id, name, logosrc
const museumInfo = createSlice({
  name:'museumInfo',
  initialState:[],
  //   { 
  //     id : "1",  //LT_P_DGMUSEUMART.1에서 숫자만 가져와 id로 만듬
  //     mus_nam:"울진봉평신라비전시관",
  //     mus_typ:'국립',
  //     new_adr:"경상북도 울진군 죽변면 봉화길 15",
  //     opr_tel:"054-789-5460",
  //     // 평일
  //     wds_tme: "10:00",
  //     wde_tme: "17:00:00.000",
  //     // 휴일
  //     hds_tme: "10:00",
  //     hde_tme: "17:00:00.000",
  //     // 휴관정보
  //     hdy_inf: "월",  // 추가될때 + 로 빈칸채움 변경할것!
  //     //가격
  //     adt_fee: "0",
  //     chd_fee: "0",
  //     yot_fee: "0"
  // } 
  // ]
  reducers: {
    setMuseumInfo(state, action){
      return action.payload;
    }
  }
})
export const { setMuseumInfo } = museumInfo.actions;
export default museumInfo;