import MarkList from "../component/MarkList";

function Mark() {

  const data = JSON.parse(localStorage.getItem("Pg_CM"));

  if (!data) {
    return <div>저장된 북마크가 없습니다.</div>;
  }

  return (
    <div className="Mark">
      <table>
        <tr>
          <th hidden>ID(나중에 안보이게 변경)</th>
          <th>지역</th>
          <th>박물관</th>
          <th>삭제</th>
        </tr>
        <MarkList />
      </table>
    </div>
  );
}

export default Mark;
