import "./login.scss";
import loginPng from "../../assets/images/Frame.png";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { api } from "../../api/api";
import { setAuth } from "../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  SHOW_PASSWORD,
  GET_LOG_EMAIL,
  GET_LOG_PASSWORD,
  CLEAR_INPUT,
} from "../../action";

function Login() {
  const dispatch = useDispatch();
  const { showPassword, logEmail, logPassword } = useSelector((state) => state);

  let navigate = useNavigate();

  useEffect(() => {
    const auth = setAuth();
    if (auth) {
      navigate("/");
    }
  }, [navigate]);

  const auth = (e) => {
    e.preventDefault();

    const submitform = {
      email: logEmail,
      password: logPassword,
    };

    const check = {
      email: logEmail.trim().length === 0,
      password: logPassword.trim().length === 0,
    };

    if (check.email || check.password) {
      toast.error("Please enter username and passsword", {
        autoClose: 3000,
      });
    } else {
      toast.success("loading . . . ", {
        autoClose: 3000,
      });

      api
        .loginAuth(submitform)
        .then((response) => response.json())
        .then((res) => {
          if (res.token !== undefined) {
            localStorage.setItem("token", res.token);
            navigate("./");
          } else {
            toast.error("Bunday user yo'q", {
              autoClose: 2000,
            });
          }
          console.log(res);
        });

      dispatch(CLEAR_INPUT());
    }
  };

  return (
    <div className="login">
      <div className="login__left">
        <img src={loginPng} alt="rasm" />
      </div>
      <div className="login__right">
        <h4 className="login__right-title">Sign in</h4>
        <p className="login__right-description">
          Do not you have an account? <NavLink to="/register">Sign up</NavLink>
        </p>
        <form onSubmit={(e) => auth(e)}>
          <input
            value={logEmail}
            onChange={(e) => dispatch(GET_LOG_EMAIL(e.target.value))}
            type="email"
            placeholder="Email"
          />
          <input
            value={logPassword}
            onChange={(e) => dispatch(GET_LOG_PASSWORD(e.target.value))}
            type={showPassword ? "text" : "password"}
            placeholder="Password"
          />
          <button type="submit">Next step</button>
          <span onClick={() => dispatch(SHOW_PASSWORD(!showPassword))}>
            {showPassword ? (
              <i className="bi bi-eye-slash-fill"></i>
            ) : (
              <i className="bi bi-eye-fill"></i>
            )}
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
