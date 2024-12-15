import React from 'react';

function Favorites  ({ favorites }) {
  return (
    <div className='favors'>
      <h2>Films favoris</h2>
      {favorites.length === 0 ? (
        <p>Aucun film favori.</p>
      ) : (
        <ul>
          {favorites.map((movie) => (
            <li key={movie.title}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
