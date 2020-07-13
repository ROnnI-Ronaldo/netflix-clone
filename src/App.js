import React from "react";
import "./App.css";

import Row from "./Components/Row";

import requests from "./requests";

function App() {
  const {
    fetchTrending,
    fetchNetflixOriginals,
    fetchTopRated,
    fetchActionMovies,
    fetchComedyMovies,
    fetchHorrorMovies,
    fetchRomanceMovies,
    fetchDocumentaries,
  } = requests;

  return (
    <div className="App">
      <Row title="Trending Movies" fetchUrl={fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginals} />
    </div>
  );
}

export default App;
