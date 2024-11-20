import MoviesList from "@/src/components/movies/MoviesList";
import { MovieProps } from "@/src/types";
import React from "react";

function SimilarMovies({ movies }: { movies: MovieProps[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">More Like This</h2>
      <MoviesList movies={movies} noSlider />
    </div>
  );
}

export default SimilarMovies;
