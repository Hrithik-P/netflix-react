import React, { useEffect, useState } from "react";
import "./RowPosterSmall.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constant";
function RowPosterSmall() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(`/discover/movie?api_key=${API_KEY}&with_genres=28`)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.results);
      });
  }, []);

  return (
    <div className="row1">
      <h2>Action</h2>
      <div className="posters1">
        {movies.map((obj) => (
          <img
            className="poster1"
            src={`${imageUrl + obj.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default RowPosterSmall;
