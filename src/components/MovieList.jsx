import React from 'react';

function MovieList ({ movies, onSelectMovie, onAddToFavorites, sortCriteria }) {
  const sortedMovies = [...movies];

  if (sortCriteria) {
    sortedMovies.sort((a, b) => {
      if (sortCriteria === 'rating') return b.rating - a.rating;
      if (sortCriteria === 'releaseYear') return b.releaseYear - a.releaseYear;
      return 0;
    });
  }

  return (
    <div>
      <h2 className='movies'>Movies</h2>
      <div className='container'>
      {sortedMovies.map((movie) => (
        <div key={movie.title} className='  movie-card' style={{ 
          backgroundImage: `url(${movie.img})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          width: '270px', 
          height: '422px', 
        }}  onClick={() => onSelectMovie(movie)}>
          <img 
          src={movie.img} 
          alt={movie.title} 
          style={{
            width: '100%', // Set the width to fill the card
            height: '100%', // Set the height to fill the card
            objectFit: 'cover', // Ensure the image covers the area without stretching
            opacity: 0 // Hide the image, it's for background reference
          }} 
        />
        <h3>{movie.title}</h3>
          
          <span>{movie.genre} - {movie.releaseYear} - {movie.rating}</span>
          <button className='button ' onClick={() => onAddToFavorites(movie)}>Add to Favorites</button>
        </div>
        
      ))}
      </div>
    </div>
  );
};

export default MovieList;
