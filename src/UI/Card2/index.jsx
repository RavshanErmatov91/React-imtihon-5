import { useNavigate } from "react-router-dom";
import "./card2.scss";

function Card({ title, date, img, desc }) {
  const navigate = useNavigate();
  return (
    <div className="card__two justify-content-center d-flex  text-white">
      <img
        className="rounded"
        style={{ width: "500px" }}
        src={img}
        alt="rasm"
      />
      <div className="card__child m-5 p-5">
        <h1>
          <span className="text-secondary">Nomi : </span>
          {title}
        </h1>
        <h3 className="my-3">
          <span className="text-secondary ">Sana :</span> {date} year
        </h3>
        <p>
          <span className="text-success fs-5">Haqida : </span>
          {desc}
        </p>
        <button
          onClick={() => {
            navigate("/home/jadid");
          }}
          className="btn btn-primary mt-3"
        >
          Go back
        </button>
      </div>
    </div>
  );
}

export default Card;
