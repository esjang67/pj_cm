import "./Button.css";
// import btButton from 'react-bootstrap/Button';
// 북마크, 삭제, 글쓰기, 저장, 취소, 로그인, 가입
// 버튼이름, 클릭이벤트, 사이즈 type(basic, wide, narrow, area), 색

const BTN_SIZE_AREA = "area"; // area 지역버튼
const BTN_SIZE_BASIC = "basic";
const BTN_SIZE_WIDE = "wide";
const BTN_SIZE_NARROW = "narrow";

function Button({ title, onsubmit, size, color }) {
  return (
    //  + (size={size}) ? ` area_btn`:''
    <button className={`Button btn_${size}`} onClick={onsubmit}>
      {title}
    </button>
    // <btButton variant="outline-primary" onClick={onsubmit}>{title}</btButton>
  );
}

export default Button;
