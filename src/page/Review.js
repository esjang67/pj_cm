import { useState } from "react";
import ReviewList from "../component/ReviewList";
import { useNavigate } from "react-router-dom";
import "../pageCss/Review.css";

function Review() {
  const data = JSON.parse(localStorage.getItem("Pg_CM_Rv"));
  const [rList, setRList] = useState(data);
  const navigate = useNavigate();

  function reviewNewHandler() {
    navigate("/review/new");
  }

  if (!data) {
    return (
      <div className="Review">
        <div className="review_btn_new">
          <button onClick={reviewNewHandler}>글쓰기</button>
        </div>
        <div>저장된 북마크가 없습니다.</div>
      </div>
    );
  }

  return (
    <div className="Review">
      <h4>후기</h4>
      <div className="review_btn_new">
        <button onClick={reviewNewHandler}>글쓰기</button>
      </div>
      <div className="reviewList">
        {/* {!data ? (
          <div className="Review">저장후기 없음</div>
        ) : ( */}
        <table className="review_table">
          <thead>
            <tr>
              <th>방문일자</th>
              {/* <th hidden>박물관id</th> */}
              <th>박물관</th>
            </tr>
          </thead>
          <tbody>
            <ReviewList rList={rList} />
          </tbody>
        </table>
        {/* )} */}
      </div>
    </div>
  );
}

export default Review;
