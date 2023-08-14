import { useState } from "react";
import ReviewList from "../component/ReviewList";
import { useNavigate } from "react-router-dom";

function Review() {
  const data = JSON.parse(localStorage.getItem('Pg_CM_Rv'));
  const [rList, setRList] = useState(data);
  const navigate = useNavigate();

  function reviewNewHandler() {
    navigate('/review/new')
  }

  return (
    <div className="Review">

      <div>
        user 님의 후기
        <button onClick={reviewNewHandler}>글쓰기</button>
      </div>
      <div className="reviewList">
      {
        (!data) ? 
          <div className="Review">저장후기 없음</div>
        :
          <table>
            <tr>
              <th>방문일자</th>
              {/* <th hidden>박물관id</th> */}
              <th>박물관</th>
            </tr>
            <ReviewList rList={rList} setRList={setRList} />
          </table>
        
      }
      </div>
    </div>
    )
}

export default Review;