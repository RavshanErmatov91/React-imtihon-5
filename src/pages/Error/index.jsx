import { NavLink } from "react-router-dom";

function Error() {
  return (
    <div className="text-center m-5 p-5 ">
      <div className="text-white  fs-5">PAGE NOT FOUND 404</div>
      <NavLink to="/home">
        <button className="btn btn-primary px-5 mx-auto mt-2 ">Go Back</button>
      </NavLink>
    </div>
  );
}

export default Error;
