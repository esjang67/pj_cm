import "./Button.css";

export default function Button({ title, icon, onClickHandler }) {
  return (
    <button onClick={onClickHandler}>
      {icon}      {title}
    </button>
  );
}
