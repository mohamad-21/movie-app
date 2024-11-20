import MovieDetails from "@/src/components/movies/MovieDetails";
import { getMovieById } from "@/src/lib/actions";
import { notFound } from "next/navigation";

async function MovieDetailsWrapper({ movieId }: { movieId: string }) {
  const movie = await getMovieById(movieId);
  if (!movie) notFound();

  return <MovieDetails movie={movie} />;
}

export default MovieDetailsWrapper;
