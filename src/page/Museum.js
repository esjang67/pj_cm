import { useParams } from "react-router-dom";
import MuseumDetail from "../component/MuseumDetail";

function Museum() {
  const { id } = useParams();

  return (
    <div className="Museum">
      <MuseumDetail id={id} />
    </div>
  );
}

export default Museum;
