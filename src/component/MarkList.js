import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function MarkList() {
  const { museum } = useSelector((state) => state);
  const data = JSON.parse(localStorage.getItem("Pg_CM"));
  const [mList, setMList] = useState(data);
  const navigate = useNavigate();

  // 삭제(로컬스토리지에서 삭제하기)
  const onDeleteHandler = () => {
    const getID = document.querySelector(".m_id").innerHTML;
    console.log(getID);
    let reData = data.filter((m) => m !== getID);
    console.log("MarkList reData", reData);
    localStorage.setItem("Pg_CM", JSON.stringify(reData));
    setMList(reData);
  };

  // 박물관 행 선택시 디테일화면으로 이동
  const onRowHandler = (e) => {
    const getID = e.target.parentNode.children[0].innerHTML;
    navigate("/museum/" + getID);
  };

  return data.map((mark) => {
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
          <button onClick={onDeleteHandler}>삭제</button>
        </td>
      </tr>
    );
  });
}

export default MarkList;
