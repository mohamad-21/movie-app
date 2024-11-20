import React from "react";
import ListHeader from "@/src/components/ListHeader";
import { getActionMovies } from "@/src/lib/actions";
import MoviesList from "@/src/components/movies/MoviesList";

async function Actions() {
  const data = await getActionMovies();
  const movies = data!.results.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div>
      <ListHeader title="Action" href="/genre/action" />
      <MoviesList movies={movies} />
    </div>
  );
}

export default Actions;
