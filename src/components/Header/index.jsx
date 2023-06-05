import { NavLink, useNavigate } from "react-router-dom";
import Badiy from "../../assets/images/Badiiyat.svg";
import Person from "../../assets/images/person.png";
import "./header.scss";
import Temur from "../../assets/images/temuriylar.png";
import Qidirish from "../../assets/images/Qidirish.svg";
import Search from "../../assets/images/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import { GET_VALUE } from "../../action";
import { useEffect } from "react";
import Temur2 from "../../assets/images/Temur.png";

function Header() {
  const dispatch = useDispatch();

  const { value } = useSelector((state) => state);
  const navigate = useNavigate();

  // console.log(value);

  useEffect(() => {
    if (value) {
      navigate(`/search/${value}`);
    } else {
      navigate(`/home`);
    }
  }, [value]);

  const inputValue = (e) => {
    dispatch(GET_VALUE(e.target.value));
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="container">
        <div className="header__top">
          <nav className="nav">
            <NavLink to="/">
              <img src={Badiy} alt="rasm" />
            </NavLink>
            <ul className="nav__ul">
              <li className="nav__ul__list">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activee" : "text-white"
                  }
                  to="/home"
                >
                  Bosh Sahifa
                </NavLink>
              </li>
              <li className="nav__ul__list">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "activee" : "text-white"
                  }
                  to="/nasr"
                >
                  Nasr
                </NavLink>
              </li>
              <li className="nav__ul__list">
                <NavLink
                  className={({ isActive }) => (isActive ? "" : "text-white")}
                >
                  Nazm
                </NavLink>
              </li>
              <li className="nav__ul__list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  Maqolalar
                </NavLink>
              </li>
              <li className="nav__ul__list">
                <NavLink
                  className={({ isActive }) => (isActive ? "text-white" : "")}
                >
                  Forum
                </NavLink>
              </li>
            </ul>
            <img src={Person} alt="rasm" />
          </nav>
        </div>

        <div className="header__bottom">
          <div
            id="carouselExampleCrossfade"
            className="carousel slide carousel-fade"
            data-mdb-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-mdb-target="#carouselExampleCrossfade"
                data-mdb-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-mdb-target="#carouselExampleCrossfade"
                data-mdb-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-mdb-target="#carouselExampleCrossfade"
                data-mdb-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={Temur}
                  className="d-block w-100 rounded"
                  alt="Wild Landscape"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={Temur2}
                  className="d-block w-100 rounded"
                  alt="Camera"
                  style={{ width: "100%", height: "346.70px" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ width: "100%", height: "346.70px" }}
                  src="https://www.savol-javob.com/wp-content/uploads/2021/01/736_736_80_aa8bde912a0c5cc6ad7426c1a6c1d282.jpg"
                  className="d-block w-100 rounded"
                  alt="Exotic Fruits"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-mdb-target="#carouselExampleCrossfade"
              data-mdb-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="header__medium">
          <div className="header__medium__intro">
            <img src={Qidirish} alt="rasm" />
            <div className="header__medium__intro__child">
              <form onSubmit={(e) => formSubmit(e)}>
                <input
                  value={value}
                  type="text"
                  placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
                  onChange={(e) => inputValue(e)}
                />
                <button type="submit">
                  <span>
                    <img src={Search} alt="icon" />
                  </span>
                  <span>Izlash</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
