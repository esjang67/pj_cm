import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMuseumName } from "../util/util_museum";
import { getFormettedDate } from "../util/util_date";
import { useState } from "react";

function ReviewList() {
  const { museum } = useSelector((state) => state);
  const data = JSON.parse(localStorage.getItem("Pg_CM_Rv"));
  const [rList, setRList] = useState(data);
  const navigate = useNavigate();

  if(data===null){
    return
  }
  // 로컬스토리지 정보 : Pg_CM_Rv[{id:0, date:'2023-08-14',museum:'1156',content:'내용}]

  function onRowHandler(e) {
    const getID = e.target.parentNode.dataset.id;
    // alert(getID)
    navigate("/review/" + getID);
  }

  return (
    // <div className="ReviewList">
    <>
      {rList.map((review) => {
        return (
          <tr key={review.id} data-id={review.id} onClick={onRowHandler}>
            <td>{getFormettedDate(new Date(review.date))}</td>
            {/* <td hidden>{review.museum}</td> */}
            <td>{getMuseumName(museum, review.museum)}</td>
          </tr>
        );
      })}
    </>
  );
}

export default ReviewList;
