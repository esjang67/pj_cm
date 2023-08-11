import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Museum() {

  const { museum } = useSelector(state=> state);
  const {MID} = useParams('MID');
  
  const data = museum.filter((d)=> String(d.id) === String(MID));
  // const data1 = museum.slice((d)=> String(d.id) === String(MID));

  console.log('Museum', museum, MID, data)

  return (
    <div className="Museum">
      {data.mus_nam}
      {data.mus_typ}
      {data.new_adr}
      {data.opr_tel}
      <p>관람시간</p>
      <p>평일</p>
      {data.wds_tme}
      {data.wde_tme}
      <p>휴일</p>
      {data.hds_tme}
      {data.hde_tme}
      <p>휴관정보</p>
      {data.hdy_inf}
      <p>관람료</p>
      어른 : {data.adt_fee}
      청소년 : {data.chd_fee}
      어린이 : {data.yot_fee}
      
    </div>
    )
}

export default Museum;