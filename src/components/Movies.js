import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movie = movies.map(movie => {
    const genres = movie.genres.map(genre => {
      return <p>{genre}</p>
    })
    return <div><h2>{movie.title}</h2>{genres}{movie.time}</div>
  })
  return (
    <div>
        <h1>Movies Page</h1>
        {movie}
    </div>
  );
};

export default Movies;
