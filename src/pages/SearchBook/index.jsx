import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const { searchBook } = useParams();
  const [data, setData] = useState([]);

  console.log(data);

  const fetchCountry = async () => {
    const res = await fetch(`http://13.48.147.57/author/search/${searchBook}`);
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    fetchCountry();
  }, [searchBook]);
  return (
    <div>
      {data.map((el) => (
        <ul>
          <li className="text-light">{el.id}</li>
        </ul>
      ))}
    </div>
  );
}

export default Search;
