import { NavLink, Outlet } from "react-router-dom";
import Kategoriya from "../../assets/images/kategoriya.svg";
import "./home.scss";

function Home() {
  return (
    <section className="container">
      <div className="main">
        <img className="main-img" src={Kategoriya} alt="rasm" />
        <div className="main__bottom">
          <ul className="main__bottom__ul">
            <li className="main__bottom__ul__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "colorr" : "text-secondary"
                }
                to="temur"
              >
                Temuriylar davri
              </NavLink>
            </li>
            <li className="main__bottom__ul__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "colorr" : "text-secondary"
                }
                to="/home/jadid"
              >
                Jadid adabiyoti
              </NavLink>
            </li>
            <li className="main__bottom__ul__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "colorr" : "text-secondary"
                }
                to="sovet"
              >
                Sovet davri
              </NavLink>
            </li>
            <li className="main__bottom__ul__item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "colorr" : "text-secondary"
                }
                to="mustaqillik"
              >
                Mustaqillik davri
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </section>
  );
}

export default Home;
