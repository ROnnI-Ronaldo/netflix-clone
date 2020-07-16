import React, { useState, useEffect } from "react";
import axios from "../../axios";
import YouTube from "react-youtube";
import MovieTrailer from "movie-trailer";

import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [movieTrailer, setMovieTrailer] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      const result = await axios.get(fetchUrl);
      setMovies(result.data.results);
      return result;
    }
    fetchMovies();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const trailerHandle = (movie) => {
    console.log(movie);
    if (movieTrailer) {
      console.log("here");
      setMovieTrailer("");
    } else {
      MovieTrailer(movie?.name || "")
        .then((url) => {
          const URLParams = new URLSearchParams(new URL(url).search);
          setMovieTrailer(URLParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => trailerHandle(movie)}
            className={`row__poster ${isLarge && "row__postLarge"}`}
            src={`${base_url}${
              isLarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {movieTrailer && <YouTube videoId={movieTrailer} opts={opts} />}
    </div>
  );
};

export default Row;
