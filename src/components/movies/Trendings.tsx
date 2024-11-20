import { getTrendingMovies } from "@/src/lib/actions";
import MoviesList from "./MoviesList";

// not page params. is searchParams
type Props = {
  params?: { [q: string]: string | undefined };
}

async function Trendings({ params }: Props) {
  const time = ["day", "week"].includes(params?.filter_trendings || "") ? params?.filter_trendings : "day";
  const data = await getTrendingMovies({ time });
  const movies = data!.results.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <MoviesList movies={movies} />
  );
}

export default Trendings;
