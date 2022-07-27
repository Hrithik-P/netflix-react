import React, { useEffect, useState } from "react";
import "./RowPoster.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constant";
function RowPoster() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`discover/tv?api_key=${API_KEY}&with_networks=213`)
      .then((response) => {
        console.log(response.data);
        setMovie(response.data.results);
      });
  }, []);

  return (
    <div className="row">
      <h2>Netflix Original</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img
            className="poster"
            src={`${imageUrl+obj.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
}

export default RowPoster;
