import React from 'react';

function MovieDetails  ({ movie })  {
  if (!movie) return null;

  return (
    <div className='details'>
      
      <img src= {movie.img} alt={movie.title} />
      <div className='text'>
      <h3>Détails du film</h3>
      <p><strong>Titre:</strong> {movie.title}</p>
      <p><strong>Réalisateur:</strong> {movie.director}</p>
      <p><strong>Année:</strong> {movie.releaseYear}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Note:</strong> {movie.rating}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
