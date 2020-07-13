import React, { useState, useEffect } from "react";

import axios from "../../axios";
import requests from "../../requests";

import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        result.data.results[
          Math.floor(Math.random() * result.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
    </header>
  );
};

export default Banner;
