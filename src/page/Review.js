import ReviewList from "../component/ReviewList";
import { useNavigate } from "react-router-dom";
import "../pageCss/Review.css";
import Button from "../custom/Button";

function Review() {
  const navigate = useNavigate();

  function reviewNewHandler() {
    navigate("/review/new");
  }

  return (
    <div className="Review">
      <h4><i class="fa-regular fa-note-sticky"/> 리뷰</h4>
      <div className="review_btn_new">
        <Button onClickHandler={reviewNewHandler} title='글쓰기'/>
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
            <ReviewList />
          </tbody>
        </table>
        {/* )} */}
      </div>
    </div>
  );
}

export default Review;
