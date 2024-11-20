import MoviesList from "@/src/components/movies/MoviesList";
import { getSimilarMovies } from "@/src/lib/actions";
import React from "react";
import ListHeader from "../ListHeader";

async function SimilarMoviesWrapper({ movieId }: { movieId: string }) {
  const similarMoviesResult = await getSimilarMovies(movieId);
  if (!similarMoviesResult?.results.length) return;
  const movies = similarMoviesResult.results.slice(0, 7);

  return (
    <div>
      <ListHeader title="More Like This" />
      <MoviesList movies={movies} noSlider />
    </div>
  );
}

export default SimilarMoviesWrapper;
