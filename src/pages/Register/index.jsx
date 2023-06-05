import "./register.scss";
import Regis from "../../assets/images/register.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

import {
  GET_FIRST_NAME,
  GET_LAST_NAME,
  GET_PHONE,
  GET_EMAIL,
  GET_PASSWORD,
  SHOW_PASSWORD,
} from "../../action";
import { api } from "../../api/api";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstname, lastName, phone, email, password, showPassword } =
    useSelector((state) => state);

  const regAuth = (e) => {
    e.preventDefault();

    const params = {
      first_name: firstname,
      last_name: lastName,
      phone: phone,
      email: email,
      password: password,
    };

    console.log(params);
    const regCheck = {
      firstname: firstname.trim().length === 0,
      lastName: lastName.trim().length === 0,
      phone: phone.trim().length === 0,
      email: email.trim().length === 0,
      password: password.trim().length === 0,
    };

    if (
      regCheck.firstname ||
      regCheck.lastName ||
      regCheck.phone ||
      regCheck.email ||
      regCheck.password
    ) {
      toast.error("Please fill input");
    } else {
      toast.success("Loading . . .");
      api
        .registerAuth(params)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem("regToken", data.token);
          navigate("/login");
        });
    }
  };

  return (
    <div className="register">
      <div className="register__left">
        <img src={Regis} alt="register" />
      </div>
      <div className="register__right">
        <h1 className="register__right-title">Sign up</h1>
        <p className="register__right-description">
          Already have an account? <NavLink to="/login">Sign in</NavLink>
        </p>
        <form onSubmit={(e) => regAuth(e)}>
          <input
            onChange={(e) => dispatch(GET_FIRST_NAME(e.target.value))}
            type="text"
            placeholder="First name"
          />
          <input
            onChange={(e) => dispatch(GET_LAST_NAME(e.target.value))}
            type="text"
            placeholder="Last name"
          />
          <input
            onChange={(e) => dispatch(GET_PHONE(e.target.value))}
            type="number"
            placeholder="Phone"
          />

          <input
            onChange={(e) => dispatch(GET_EMAIL(e.target.value))}
            type="email"
            placeholder="Email"
          />
          <div>
            <input
              onChange={(e) => dispatch(GET_PASSWORD(e.target.value))}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span onClick={() => dispatch(SHOW_PASSWORD(!showPassword))}>
              {showPassword ? (
                <i className="bi bi-eye-slash-fill"></i>
              ) : (
                <i className="bi bi-eye-fill"></i>
              )}
            </span>
          </div>
          <button type="submit">Next step</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Register;
