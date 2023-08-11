import { useSelector } from "react-redux";
import Button from "./Button";

function AreaList({ setArea }) {
  const { museum } = useSelector((slice) => slice);
  // const [local, setLocal] = useState([]);   // 지역정보

  const _local = [];

  museum.forEach((Mdata) => {
    let adrpart = String(Mdata.new_adr).split(" ")[0];
    if (!_local.includes(adrpart)) {
      _local.push(adrpart);
    }
  });

  // setLocal(_local);

  // 지역버튼 선택 - 관련지역 조회시킴(주소:)
  const onClickHandler = (e) => {
    setArea(e.target.innerText);
  };

  return (
    <div className="AreaList">
      <div className="area">
        {_local.map((data, i) => (
          <Button
            key={i}
            title={data}
            size={"area"}
            onsubmit={onClickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default AreaList;
