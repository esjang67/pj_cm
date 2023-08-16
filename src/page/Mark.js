import MarkList from "../component/MarkList";
import "../pageCss/Mark.css";

function Mark() {
  
  return (
    <div className="Mark">
      <h4><i className="fa-regular fa-bookmark"/> 북마크</h4>
      <div className="markList">
        <table className="rwd-table">
          <thead>
            <tr>
              <th hidden>ID</th>
              <th>지역</th>
              <th>박물관</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-hover">
            <MarkList />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Mark;
