import { NavLink } from "react-router-dom";
import "./card.scss";

function BookCard({ title, year, img, price, id }) {
  return (
    <NavLink to={`/single/${id}`}>
      <div className="book">
        <img
          style={{ width: "100%", height: "130px" }}
          className="rounded-top"
          src={img}
          alt="rasm"
        />
        <div className="book__child">
          <h5>Title : {title}</h5>
          <p className="my-3">Year : {year}</p>
          <h6>Price : {price}$</h6>
        </div>
      </div>
    </NavLink>
  );
}

export default BookCard;
