import React from "react";
import { movies } from "../data";

function Movies() {

  const renderMovies = movies.map((movie) => {
    return (
      <div>
        <div key={movie.title}>{movie.title}</div>
        <div key={movie.time}>{movie.time}</div>
          {movie.genres.map(mov => {
          return <li key={mov}>{mov}</li>
  })}
      </div>
    )

  })

  return(
  <div className="movies"> 
    <h1>Movies Page</h1>
    <div className="renderMovies">{renderMovies}</div>
  </div>
  );
}

export default Movies;
