import React, { useState } from 'react';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';
import SortButtons from './components/SortButtons';
import AddFilmForm from './components/AddFilmForm';
import Pagination from './components/Pagination';
import Favorites from './components/Favorites';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import Inception from './inception.png'; 
import father from './father.png'; 
import Dark from './Dark.png'; 
import Pulp from './pulp.png'; 
import List from './schindler.png'; 
import Shank from './shawshank.png'; 
import Gump from './gump.png'; 
import Matrix from './matrix.png'; 
import Club from './fclub.png'; 
import Lord from './king.png'; 

const initialMovies = [
  { title: "Inception", director: "Christopher Nolan", releaseYear: 2010, genre: "Science Fiction", rating: 8.8, img: Inception },
  { title: "The Godfather", director: "Francis Ford Coppola", releaseYear: 1972, genre: "Crime", rating: 9.2, img: father },
  { title: "The Dark Knight", director: "Christopher Nolan", releaseYear: 2008, genre: "Action", rating: 9.0, img: Dark },
  { title: "Pulp Fiction", director: "Quentin Tarantino", releaseYear: 1994, genre: "Crime", rating: 8.9, img: Pulp },
  { title: "Schindler's List", director: "Steven Spielberg", releaseYear: 1993, genre: "Historical Drama", rating: 9.0, img: List },
  { title: "The Shawshank Redemption", director: "Frank Darabont", releaseYear: 1994, genre: "Drama", rating: 9.3, img: Shank },
  { title: "Forrest Gump", director: "Robert Zemeckis", releaseYear: 1994, genre: "Comedy-Drama", rating: 8.8, img: Gump },
  { title: "The Matrix", director: "Lana Wachowski, Lilly Wachowski", releaseYear: 1999, genre: "Science Fiction", rating: 8.7, img: Matrix },
  { title: "Fight Club", director: "David Fincher", releaseYear: 1999, genre: "Drama", rating: 8.8, img: Club },
  { title: "The Lord of the Rings: King", director: "Peter Jackson", releaseYear: 2003, genre: "Fantasy", rating: 9.0, img: Lord }
];

function App() {
  const [movies, setMovies] = useState(initialMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortCriteria, setSortCriteria] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 5;

  function Search(term) { 
    setSearchTerm(term);
  }

  function Sort(criteria) {
    setSortCriteria(criteria);
  }

  function SelectMovie(movie) {
    setSelectedMovie(movie);
  }

  function AddFilm(newFilm) {
    setMovies([...movies, newFilm]);  
  }

  function AddToFavorites(movie) {
    if (favorites.some(favMovie => favMovie.title === movie.title)) {
      alert("This movie is already in your favorites!");
      return; // Stop further execution
    } else {
      setFavorites([...favorites, movie]);
    }
  }

  function PageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  // Filter movies based on search term
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort movies
  const sortedMovies = [...filteredMovies];
  if (sortCriteria) {
    sortedMovies.sort((a, b) => {
      if (sortCriteria === 'rating') return b.rating - a.rating;
      if (sortCriteria === 'releaseYear') return b.releaseYear - a.releaseYear;
      return 0;
    });
  }

  // Pagination logic
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = sortedMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  return (
    <div>
      <Header />
      <SearchBar onSearch={Search} />
      <SortButtons onSort={Sort} />
      <MovieList
        movies={currentMovies}
        onSelectMovie={SelectMovie}
        onAddToFavorites={AddToFavorites}
        sortCriteria={sortCriteria}
      />
      <Pagination
        totalMovies={sortedMovies.length}
        moviesPerPage={moviesPerPage}
        paginate={PageChange}
      />
      <MovieDetails movie={selectedMovie} />
      <Favorites favorites={favorites} />
      <AddFilmForm onAddFilm={AddFilm} />  {/* Pass the handleAddFilm function */}
      <Footer />
    </div>
  );
}

export default App;
