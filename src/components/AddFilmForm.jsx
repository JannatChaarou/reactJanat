import React, { useState } from 'react';

function AddFilmForm ({ onAddFilm }) {
  const [newFilm, setNewFilm] = useState({
    title: '',
    director: '',
    releaseYear: '',
    genre: '',
    rating: '',
    img: '',
  });
  const [error, setError] = useState('');

function handleChange (e) {
    setNewFilm({
      ...newFilm,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit (e)  {
    e.preventDefault();
    if (!newFilm.title || !newFilm.director || !newFilm.releaseYear || !newFilm.genre || !newFilm.rating || !newFilm.img) {
      setError('Tous les champs doivent être remplis');
      return;
    }

    // Add the movie to the parent component's list
    onAddFilm(newFilm);
    setNewFilm({
      title: '',
      director: '',
      releaseYear: '',
      genre: '',
      rating: '',
      img: '',
    });
    setError('');
  };

  return (
  <div>
  <h2 className='movies'>Add Movie</h2>
    <div className='center-container'>
      
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="title"
        value={newFilm.title}
        onChange={handleChange}
        placeholder="Titre"
      />
      <input
        type="text"
        name="director"
        value={newFilm.director}
        onChange={handleChange}
        placeholder="Réalisateur"
      />
      <input
        type="number"
        name="releaseYear"
        value={newFilm.releaseYear}
        onChange={handleChange}
        placeholder="Année de sortie"
      />
      <select name="genre" value={newFilm.genre} onChange={handleChange}>
        <option value="">Sélectionner le genre</option>
        <option value="Crime">Crime</option>
        <option value="Drama">Drama</option>
        <option value="Action">Action</option>
        <option value="Comedy">Comedy</option>
      </select>
      <input
        type="number"
        name="rating"
        value={newFilm.rating}
        onChange={handleChange}
        placeholder="Note"
      />
      <input
        type="file"
        name="img"
        value={newFilm.img}
        onChange={handleChange}
      />
      <button type="submit" className='button'>Ajouter le film</button>
      {error && <p>{error}</p>}
    </form>
    </div>
    </div>
  );
};

export default AddFilmForm;
