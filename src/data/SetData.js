import { useDispatch } from 'react-redux';
import { setMuseum } from '../redux/MuseumSlice';
import { setMuseumInfo } from '../redux/MuseumInfoSlice';

// 박물관 리스트를 저장함

function SetData(data) {

  const dispatch = useDispatch();

  let tmp = [];
  let tmpInfo = [];
  
  data.forEach((Mdata) => {

    tmp.push({
      id: String(Mdata.id).split('.')[1],  //LT_P_DGMUSEUMART.1에서 숫자만 가져와 id로 만듬
      mus_nam: Mdata.properties.mus_nam,
      mus_typ: Mdata.properties.mus_typ,
      logo_src: '../img/국립중앙박물관.jpg'  
    })

    tmpInfo.push({
      id : String(Mdata.id).split('.')[1],  //LT_P_DGMUSEUMART.1에서 숫자만 가져와 id로 만듬
      mus_nam:Mdata.properties.mus_nam,
      mus_typ:Mdata.properties.mus_typ,
      new_adr:Mdata.properties.new_adr,
      opr_tel:Mdata.properties.opr_tel,
      // 평일
      wds_tme:Mdata.properties.wds_tme,
      wde_tme:String(Mdata.properties.wde_tme).substring(0,5), // "17:00:00.000",
      // 휴일
      hds_tme:Mdata.properties.hds_tme,
      hde_tme:String(Mdata.properties.hde_tme).substring(0,5),
      // 휴관정보
      hdy_inf:String(Mdata.properties.hdy_inf).replace('+', ' '),  // 추가될때 + 로 빈칸채움 변경할것!
      //가격
      adt_fee:Mdata.properties.adt_fee + "원",
      chd_fee:Mdata.properties.chd_fee + "원",
      yot_fee:Mdata.properties.yot_fee + "원"
    });
    
  })
  dispatch(setMuseum(tmp));
  
  return;
}

export default SetData;