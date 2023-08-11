import './Button.css'
// import btButton from 'react-bootstrap/Button';
// 북마크, 삭제, 글쓰기, 저장, 취소, 로그인, 가입
// 버튼이름, 클릭이벤트, 사이즈 type(basic, wide, narrow), 색

function Button({title, onsubmit, size, color}) {
  return(
    <button className="Button" onClick={onsubmit}>{title}</button>
    // <btButton variant="outline-primary" onClick={onsubmit}>{title}</btButton>
  )
}

export default Button;