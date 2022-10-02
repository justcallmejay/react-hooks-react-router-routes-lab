import React from "react";
import { directors } from "../data";

function Directors() {


  return (
    <div className="directors">
    <h1>Directors Page</h1> 
    {directors.map(dir => {
      return (
        <>    
        <div key={dir.name}>{dir.name}</div>
        {dir.movies.map((dir, i)=>{return (<li key={dir + i}>{dir}</li>)})}
        </>
        );
      })
    }
    </div>
  )}

export default Directors;
