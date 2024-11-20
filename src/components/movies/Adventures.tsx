import React from "react";
import ListHeader from "@/src/components/ListHeader";
import { getAdventureMovies } from "@/src/lib/actions";
import MoviesList from "@/src/components/movies/MoviesList";

async function Adventures() {
  const data = await getAdventureMovies();
  const movies = data!.results.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div>
      <ListHeader title="Adventure" href="/genre/adventure" />
      <MoviesList movies={movies} />
    </div>
  );
}

export default Adventures;
