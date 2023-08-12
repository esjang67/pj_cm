import MarkList from "../component/MarkList";

function Mark() {
  return (
    <div className="Mark">
      <table>
        <tr>
          <td>ID(나중에 안보이게 변경)</td>
          <td>지역</td>
          <td>박물관</td>
          <td>삭제</td>
        </tr>
        <MarkList />
      </table>
    </div>
  );
}

export default Mark;
