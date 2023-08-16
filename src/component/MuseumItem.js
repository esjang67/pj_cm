import { useNavigate } from "react-router-dom";
import "./MuseumItem.css";
// import { getEmotionImgById } from './img';

function MuseumItem({ data }) {
  const navigate = useNavigate();

  const onClickHandler = (e) => {
    navigate("/museum/" + data.id);
    // alert(data.id);
  };

  return (
    <div className="MuseumItem" onClick={onClickHandler}>
      {/* <div className="museumLogo">
        <img
          src={process.env.PUBLIC_URL + "./img/국립중앙박물관.jpg"}
          alt={data.mus_nam}
        />
      </div> */}
      <div className="item">
        <div className="item_name">
        <span>{data.mus_nam}</span>
        </div>
        <div className="item_type">
        <span>{data.mus_typ}</span>
        </div>
        <div className="item_add">
        <span>{data.new_adr}</span>
        </div>
        <div className="item_tel">
        <span>{data.opr_tel}</span>
        </div>
      </div>
    </div>
  );
}
export default MuseumItem;
