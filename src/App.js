import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import MoviesList from "./components/movies/MoviesList"
import MoviesListItem from "./components/movies/MoviesListItem";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";

function App() {

    const [mode, setMode]= useState('');
    const [movies, setMovies]= useState([]);

    const fetchMovies = async ()=>{
        const {data: {results}}= await axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`);
        setMovies(results);
    }

    useEffect( ()=>{
        fetchMovies()
    }, [])

    const changeMode=(newValue)=>{
        setMode(newValue)
    }

  return (
    <div className={mode}>
        <Navbar value={mode} onChange={changeMode}/>
        <div>
            {movies.length?<Hero data={movies}/>:<div/>}
        </div>
        <div className="relative bg-white p-14 dark:bg-bg-img-dark bg-no-repeat bg-cover">
            <MoviesList>
                {movies.map(movie=>
                        <MoviesListItem key={movie.id} movie={movie} mode={mode} />
                    )}
            </MoviesList>
        </div>
    </div>
  );
}

export default App;
