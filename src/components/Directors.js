import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const director = directors.map(director => {
    const movies = director.movies.map(movie => {
      return <p>{movie}</p>
    })
    return <div><h2>{director.name}</h2> {movies}</div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {director}
    </div>
  );
}

export default Directors
