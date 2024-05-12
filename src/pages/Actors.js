import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {

  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(response => response.json())
    .then(actorData => setActors(actorData))
  }, [])

  const actorList = actors.map((actor) => {

    const actorMovies = actor.movies;
    const actorMoviesList = actorMovies.map((movie) => {
      return <li>{movie}</li>
    })

    return  <article key={actor.id}>
      <h2>{actor.name}</h2>
      <ul>{actorMoviesList}</ul>
    </article>
  })

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        {actorList}
      </main>
    </>
  );
};

export default Actors;