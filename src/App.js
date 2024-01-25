import logo from './logo.svg';
import './App.css';
import MoviesList from './components/MoviesList';
import AddMovies from './components/AddMovies';
import { moviesData } from './components/MoviesData';
import {useState} from 'react'
import SearchMovie from './components/SearchMovie';

function App() {
  const [moviesList,setMoviesList]=useState(moviesData)
  const [nameSearch,setNameSearch]=useState("");
  const [ratingSearch,setRatingSearch]=useState(1);
  


  // function Add

  const addNewMovie=(newMovie)=>{
    setMoviesList([...moviesList,newMovie])

  }
 

  return (
    <div className="App">
      
      <MoviesList 
      moviesList={moviesList} 
      nameSearch={nameSearch}
      ratingSearch={ratingSearch}
      />
      <AddMovies addNewMovie={addNewMovie}/>
      
      <SearchMovie 
      setNameSearch={setNameSearch}
      setRatingSearch={setRatingSearch}
      ratingSearch={ratingSearch}

       />
    </div>
  );
}

export default App;
