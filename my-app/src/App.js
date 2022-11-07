import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";

import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=7f52e152";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Iron Man");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F0%2F0b%2FSearch_Icon.svg%2F1024px-Search_Icon.svg.png&imgrefurl=https%3A%2F%2Fvi.m.wikipedia.org%2Fwiki%2FT%25E1%25BA%25ADp_tin%3ASearch_Icon.svg&tbnid=kKn-48JDx0tqQM&vet=12ahUKEwiB-8Cawpz7AhXRSfUHHQ0qD2IQMygAegUIARC2AQ..i&docid=NJACVTI_1WjQkM&w=1024&h=1024&q=icon%20search&client=opera-gx&ved=2ahUKEwiB-8Cawpz7AhXRSfUHHQ0qD2IQMygAegUIARC2AQ'}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;