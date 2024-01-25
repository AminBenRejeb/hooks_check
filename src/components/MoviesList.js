import React from 'react';
import MovieCard from './MovieCard';

function MoviesList({ moviesList, nameSearch, ratingSearch }) {
  // Filtrer les films en fonction des critères de recherche
  const filteredMovies = moviesList.filter((movie) => {
    const movieName = movie.name ? movie.name.toLowerCase() : "";
    const meetsNameCriteria = movieName.includes(nameSearch.toLowerCase());
    const meetsRatingCriteria = !ratingSearch || (movie.rating && movie.rating >= parseInt(ratingSearch, 10));

    return meetsNameCriteria && meetsRatingCriteria;
  });

  return (
    <div className='film'  style={{ backgroundColor:'#F7B787',display: 'flex', flexWrap: 'wrap', marginTop: '10px', padding: '8px', paddingBottom: '20px' }}>
      {/* Afficher les films filtrés ou tous les films s'il n'y a pas de critères de recherche */}
      {filteredMovies.length === 0
        ? moviesList.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        : filteredMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      }
    </div>
  );
}

export default MoviesList;