// import Button from "./Button";
import "./AreaList.css";
// 행정구역 인구순
const _local = [
  "서울특별시",
  "부산광역시",
  "대구광역시",
  "인천광역시",
  "광주광역시",
  "대전광역시",
  "울산광역시",
  "세종특별시",
  "경기도",
  "강원도",
  "충청북도",
  "충청남도",
  "전라북도",
  "전라남도",
  "경상북도",
  "경상남도",
  "제주특별자치도",
];

function AreaList({ setArea }) {
  // 지역버튼 선택 - 관련지역 조회시킴(주소:)
  const onClickHandler = (e) => {
    setArea(e.target.innerText);
  };

  return (
    <div className="AreaList">
      <div className="button-container">
        {_local.map((data, i) => (
          <button
            className="btn btn-outline-primary btn-layer-2_1"
            key={i}
            onClick={onClickHandler}
          >
            {data}
          </button>

          // <Button
          //   className="areaBtn"
          //   key={i}
          //   title={data}
          //   size={"area"}
          //   onsubmit={onClickHandler}
          // />
        ))}
      </div>
    </div>
  );
}

export default AreaList;
