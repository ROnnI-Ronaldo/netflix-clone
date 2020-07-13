import React, { useState, useEffect } from "react";
import axios from "../../axios";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    }
    fetchMovies();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLarge && "row__postLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
