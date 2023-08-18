import { useEffect, useRef, useState } from "react";
import ComboMuseum from "../component/ComboMuseum";
import { getFormettedDate } from "../util/util_date";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../custom/Button";

// 1개 데이터만 가지고 있으므로 {}로 정의함!!!
function ReviewDetail() {
  const { id } = useParams("id"); // 리뷰id 새글작성 : id:new
  const idRef = useRef(0);
  const navigate = useNavigate();
  // 내용 state
  const [write, setWrite] = useState({
    date: getFormettedDate(new Date()),
    museum: "", // value -> id 저장됨
    content: "",
  });
  console.log("ReviewDetail write", write);

  useEffect(() => {
    if (String(id) !== "new") {
      // 로컬스토리지 조회
      let localData = JSON.parse(localStorage.getItem("Pg_CM_Rv"));
      localData = localData.filter((d) => String(d.id) === String(id)); // []
      // console.log("ReviewDetail localData", localData);
      setWrite({
        date: getFormettedDate(new Date(localData[0].date)),
        museum: localData[0].museum,
        content: localData[0].content,
      });
    }
    // console.log('ReviewDetail write', write)
  }, [id]);

  function changeDateHandler(e) {
    setWrite({
      ...write,
      date: e.target.value,
    });
    // alert(e.target.value);
  }

  function changeMuseumHandler(e) {
    setWrite({
      ...write,
      museum: e.target.value, // 박물관 id 넘어옴
    });
  }

  function changeContentHandler(e) {
    setWrite({
      ...write,
      content: e.target.value,
    });
  }

  // 버튼 핸들러
  function onBtnSave() {
    let localData = JSON.parse(localStorage.getItem("Pg_CM_Rv"));

    if (String(id) === "new") {
      // Insert
      // 로컬스토리지에 추가(첫번째로 추가할것!)
      // 로컬스토리지 정보 : Pg_CM_Rv[{id:0, date:1691625600000,museum:'1156',content:'내용}]
      console.log(new Date(write.date).getTime());
      if (!localData) {
        localStorage.setItem(
          "Pg_CM_Rv",
          JSON.stringify([
            {
              id: Number(idRef.current),
              date: new Date(write.date).getTime(),
              museum: write.museum,
              content: write.content,
            },
          ])
        );
      } else {
        idRef.current = localData[0].id;
        localStorage.setItem(
          "Pg_CM_Rv",
          JSON.stringify([
            {
              id: Number(idRef.current) + 1,
              date: new Date(write.date).getTime(),
              museum: write.museum,
              content: write.content,
            },
            ...localData,
          ])
        );
      }
    } else {
      // Update
      const upData = localData.map((d) =>
        String(d.id) === String(id)
          ? {
              id: Number(id),
              date: new Date(write.date).getTime(),
              museum: write.museum,
              content: write.content,
            }
          : d
      );
      localStorage.setItem("Pg_CM_Rv", JSON.stringify(upData));
    }
    alert("저장했습니다.");
    navigate('/review');
  }

  function onBtnDelete() {
    // 로컬스토리지에서 삭제 후 화면 돌아가기
    if (window.confirm("삭제하시겠습니까?")) {
      let localData = JSON.parse(localStorage.getItem("Pg_CM_Rv"));
      let _localData = localData.filter((d) => String(d.id) !== String(id));
      localStorage.setItem("Pg_CM_Rv", JSON.stringify(_localData));
      navigate('/review');
    }
  }

  return (
    <div className="ReviewDetail">
      <h4><i className="fa-solid fa-pen-to-square"/> 박물관에서의 추억을 남겨보세요</h4>
      <div className="rd-container">
        <form>
          <div className="rd-write">
            <div className="rd-w-date">
              <p>방문일자</p>
              <input
                type="date"
                value={write.date}
                onChange={changeDateHandler}
              />
            </div>

            <div className="rd-w-combo">
              <p>박물관</p>
              {/* 박물관 리스트 콤보 */}
              <ComboMuseum
                selId={write.museum}
                onSubmit={changeMuseumHandler}
              />
            </div>

            <div className="rd-w-text">
              <p>내용</p>
              <textarea
                defaultValue=''
                placeholder="박물관을 다녀온 이야기를 기록해 보세요."
                value={write.content}
                onChange={changeContentHandler}
              ></textarea>
            </div>
          </div>

          <div className="rd-btn">
            {
              // 신규화면시 삭제버튼 안보임
              String(id) !== "new" ? (
                <Button onClickHandler={onBtnDelete} title='삭제' />
              ) : null
            }
            {/* 저장: 신규/수정 */}
            <Button onClickHandler={onBtnSave} title='저장' />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ReviewDetail;
