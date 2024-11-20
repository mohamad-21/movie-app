import React from "react";
import ListHeader from "@/src/components/ListHeader";
import MoviesList from "@/src/components/movies/MoviesList";
import { getPopularMovies } from "@/src/lib/actions";

async function MostPopulars() {
  const data = await getPopularMovies();
  const movies = data!.results.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div>
      <ListHeader title="Popular" href="/movies/popular" />
      <MoviesList movies={movies} />
    </div>
  );
}

export default MostPopulars;
