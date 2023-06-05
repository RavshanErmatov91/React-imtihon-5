import { api } from "../../api/api";
import { GET_DATES } from "../../action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import BookCard from "../../UI/Card";

function Jadid() {
  const dispatch = useDispatch();
  const { book } = useSelector((state) => state);

  useEffect(() => {
    api
      .getBook()
      .then((res) => res.json())
      .then((data) => {
        dispatch(GET_DATES(data));
      });
  }, []);
  console.log(book);

  return (
    <div className="content">
      {book.map((el, index) => (
        <BookCard
          id={el.genre_id}
          key={el.id}
          title={el.title}
          year={el.year}
          img={el.image}
          price={el.price}
        />
      ))}
    </div>
  );
}

export default Jadid;
