import React, { useState, useEffect } from "react";

import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=7f52e152";

function App () {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("");
  }, []);
  
  const MovieCard = ({ movie: { imdbID, Poster, Title } }) => {
    return (
      <div className="movie" key={imdbID}>
          <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>
    );
  }

  return (
    <div className="app">
      <h1>Movie Heaven</h1>
      <div className="search">
        <input
          className="inputcss search"
          value={searchTerm}
          onChange={(temp) => setSearchTerm(temp.target.value)}
          placeholder="Search for movies"
        />
        <button 
          onClick={() => searchMovies(searchTerm)}> Search</button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="NotFound">
          <br></br>
          <img src='https://cdn.dribbble.com/userupload/2905354/file/original-92212c04a044acd88c69bedc56b3dda2.png?compress=1&resize=752x' alt="No results found"></img>
        </div>
      )}
    </div>
  );
};

export default App;