import React from "react";
import "./App.css";

import Row from "./Components/Row/Row";
import Banner from "./Components/Banner/Banner";
import Nav from "./Components/Nav/Nav";

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
      <Nav />
      <Banner />
      <Row title="Trending Movies" isLarge fetchUrl={fetchTrending} />
      <Row title="Netflix Originals" fetchUrl={fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={fetchTopRated} />
      <Row title="Actions Movies" fetchUrl={fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={fetchDocumentaries} />
    </div>
  );
}

export default App;
