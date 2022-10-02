import React from "react";
import { actors } from "../data";

function Actors() {

  const renderActors = actors.map(actor => {
    return (
      <>
      <div key={actor}>{actor.name}</div>
      {actor.movies.map(act => {
        return(<li key={act}>{act}</li>)
      })}
      </>
    )
  })
  return (
  <div>
  <h1>Actors Page</h1>
  {renderActors}
  </div>
  );
}

export default Actors;
