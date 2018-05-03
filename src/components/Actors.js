import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const actor = actors.map(actor => {
    const movies = actor.movies.map(movie => {
      return <p>{movie}</p>
    })
    return <div><h2>{actor.name}</h2> {movies}</div>
  })
  return (
    <div>
    <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
