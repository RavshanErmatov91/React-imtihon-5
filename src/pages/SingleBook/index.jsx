import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { GET_SINGLE_BOOK } from "../../action";
import { api } from "../../api/api";
import Card from "../../UI/Card2";

function SingleBook() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleBook } = useSelector((stata) => stata);

  console.log(singleBook);
  useEffect(() => {
    api
      .singleBook(id)
      .then((res) => res.json())
      .then((data) => {
        dispatch(GET_SINGLE_BOOK(data));
      });
  }, []);

  return (
    <div className="mx-auto m-5">
      {singleBook.map((el, index) => (
        <Card
          key={index}
          title={el.title}
          date={el.year}
          img={el.image}
          desc={el.description}
        />
      ))}
    </div>
  );
}

export default SingleBook;
