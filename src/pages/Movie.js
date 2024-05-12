import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";

function Movie() {

  const [movie,setMovie] = useState([])
  const params = useParams()
  const movieId = params.id

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${movieId}`)
    .then(response => response.json())
    .then(movieData => setMovie(movieData))
  }, [movieId])

  if(!movie.title){
    return <h1>Loading...</h1>;
  };

  const movieGenres = movie.genres;
  const movieGenresTags = movieGenres.map((genre) => {
    return <span>{genre}</span>
  })
  

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>{movie.title}</h1>
        <p>{movie.time} mins</p>
        {movieGenresTags}
      </main>
    </>
  );
};

export default Movie;