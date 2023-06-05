import { useEffect, useState } from "react";
import { api } from "../../api/api";

import Temur from "../../assets/images/temuriylar.png";
import Temur2 from "../../assets/images/Temur.png";

// import "mdb-ui-kit/css/mdb.min.css";

function Nasr() {
  // const [datas, setDatas] = useState();

  // console.log(datas);

  // useEffect(() => {
  //   api
  //     .getAuthers()
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setDatas(data);
  //     });
  // }, []);

  return (
    <div>
      <h1 className="text-white">Nasr</h1>

      {/* <div
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
            <img src={Temur} className="d-block w-100" alt="Wild Landscape" />
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
      </div> */}
    </div>
  );
}

export default Nasr;
