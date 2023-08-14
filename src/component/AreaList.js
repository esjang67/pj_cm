import { useSelector } from "react-redux";
import Button from "./Button";

function AreaList({ setArea }) {
  const { museum } = useSelector((slice) => slice);
  // const [local, setLocal] = useState([]);   // 지역정보

  const _local = [];

  museum.forEach((Mdata) => {
    // let adrpart = String(Mdata.new_adr).split(" ")[0];
    if (!_local.includes(Mdata.area_adr)) {
      _local.push(Mdata.area_adr);
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

// 행정구역 인구순
// 서울특별시
// 부산광역시
// 대구광역시
// 인천광역시
// 광주광역시
// 대전광역시
// 울산광역시
// 세종특별시
// 경기도
// 강원도
// 충청북도
// 충청남도
// 전라북도
// 전라남도
// 경상북도
// 경상남도
// 제주특별자치도
