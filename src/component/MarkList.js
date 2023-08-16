import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../custom/Button";

function MarkList() {
  const { museum } = useSelector((state) => state);
  const data = JSON.parse(localStorage.getItem("Pg_CM"));
  const [mList, setMList] = useState(data);
  const navigate = useNavigate();

  if(data===null){
    return
  }

  // 삭제(로컬스토리지에서 삭제하기)
  const onDeleteHandler = (e) => {
    e.stopPropagation()
    if(window.confirm('삭제하시겠습니까?')){
      const getID = document.querySelector(".m_id").innerHTML;
      console.log(getID);
      let reData = data.filter((m) => m !== getID);
      // 삭제후 마지막이 되면 빈칸저장시킴
      console.log("MarkList reData", reData);
      localStorage.setItem("Pg_CM", JSON.stringify(reData));
      setMList(reData);
    }
  };

  // 박물관 행 선택시 디테일화면으로 이동
  const onRowHandler = (e) => {
    const getID = e.target.parentNode.children[0].innerHTML;
    navigate("/museum/" + getID);
  };

  return mList.map((mark) => {
    // museum에서 찾기
    const _museum = museum;
    const Mdata = _museum.find((m) => String(m.id) === String(mark));

    return (
      <tr key={Mdata.id} data-id={Mdata.id} onClick={onRowHandler}>
        <td className="m_id" data-th="ID" hidden>
          {Mdata.id}
        </td>
        <td data-th="지역">{Mdata.area_adr}</td>
        <td data-th="박물관">{Mdata.mus_nam}</td>
        <td className="btn_del">
          <Button className="mark-btn-del" onClickHandler={onDeleteHandler} icon={<i class="fa-solid fa-xmark"/>}/>
        </td>
      </tr>
    );
  });
}

export default MarkList;
