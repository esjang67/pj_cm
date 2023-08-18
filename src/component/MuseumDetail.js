import { useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
import '../pageCss/Museum.css';
import Button from "../custom/Button";

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
    <div className="MuseumDeatail">
      <h3>{museumInfo.mus_nam}</h3>

      <div className="mus_def">
        <p><i className="fa-regular fa-face-meh-blank"/> {museumInfo.mus_typ}</p>
        <p><i className="fa-solid fa-location-dot"/> {museumInfo.new_adr}</p>
        <p><i className="fa-solid fa-phone"/> {museumInfo.opr_tel}</p>
      </div>
      <div className="mus_ti_pa">
        <div className="mus_time">
          <div className="p_title"><i class="fa-regular fa-clock"></i> 관람시간</div>
          <div className="mus_time_set">
            <div className="mus_time_title">
              <p>평일</p>
              <p>휴일</p>
              <p>휴관일</p>
            </div>
            <div className="mus_time_data">
              <p>
                {museumInfo.wds_tme} - {museumInfo.wde_tme}
              </p>
              <p>
                {museumInfo.hds_tme} - {museumInfo.hde_tme}
              </p>
              <p>{museumInfo.hdy_inf}</p>
            </div>
          </div>
        </div>

        <div className="mus_pay">
          <div className="p_title"><i class="fa-solid fa-coins"></i> 관람료</div>
          <div className="mus_pay_set">
            <div className="mus_pay_title">
              <p>어른</p>
              <p>청소년</p>
              <p>어린이</p>
            </div>
            <div className="mus_pay_data">
              <p>{museumInfo.adt_fee} 원</p>
              <p>{museumInfo.chd_fee} 원</p>
              <p>{museumInfo.yot_fee} 원</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mus_book">
        <Button onClickHandler={onClickHandler} title='북마크' icon={<i class="fa-regular fa-bookmark"/>} />
      </div>
    </div>
  );
}

export default MuseumDetail;
