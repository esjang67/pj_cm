import MarkList from "../component/MarkList";
import "../pageCss/Mark.css";
function Mark() {
  const data = JSON.parse(localStorage.getItem("Pg_CM"));

  if (!data) {
    return <div>저장된 북마크가 없습니다.</div>;
  }

  return (
    <div className="Mark">
      <h4>북마크</h4>
      <div className="markList">
        <table className="rwd-table">
          <thead>
            <tr>
              <th hidden>ID</th>
              <th>지역</th>
              <th>박물관</th>
              <th>삭제</th>
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
