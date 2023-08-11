import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import Button from "../component/Button";

function MuseumDetail({ id }) {
  const { museum } = useSelector((state) => state);
  // const { id } = useParams();
  const data = museum;

  const museumInfo = data.find((d) => String(d.id) === String(id));

  // 북마크 저장(로컬스토리지)
  const onClickHandler = () => {
    const localData = JSON.parse(localStorage.getItem("Pg_CM"));

    if (!localData) {
      localStorage.setItem("Pg_CM", JSON.stringify([id]));
      alert("북마크 했습니다.(신규)");
    } else {
      if (localData.find((n) => n === id)) {
        alert("이미 북마크 했습니다.(중복)");
      } else {
        const addBook = [id, ...localData];
        localStorage.setItem("Pg_CM", JSON.stringify(addBook));
        alert("북마크 했습니다.(추가)");
      }
    }
  };

  return (
    <div className="Museum">
      <Button title={"북마크"} size={"basic"} onsubmit={onClickHandler} />
      <h1>{museumInfo.mus_nam}</h1>

      <p>{museumInfo.mus_typ}</p>
      <p>{museumInfo.new_adr}</p>
      <p>{museumInfo.opr_tel}</p>
      <p>관람시간</p>
      <p>평일</p>
      <p>
        {museumInfo.wds_tme} - {museumInfo.wde_tme}
      </p>
      <p>휴일</p>
      <p>
        {museumInfo.hds_tme} - {museumInfo.hde_tme}
      </p>
      <p>휴관일 : {museumInfo.hdy_inf}</p>
      <p>관람료</p>
      <p>어른 : {museumInfo.adt_fee}원</p>
      <p>청소년 : {museumInfo.chd_fee}원</p>
      <p>어린이 : {museumInfo.yot_fee}원</p>
    </div>
  );
}

export default MuseumDetail;