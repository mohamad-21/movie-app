import MoviesList from "@/src/components/movies/MoviesList";
import ListHeader from "@/src/components/ListHeader";
import { getComedyMovies } from "@/src/lib/actions";

async function Animations() {
  const data = await getComedyMovies();
  const movies = data!.results.sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <div>
      <ListHeader title="Animation" href="/genre/animation" />
      <MoviesList movies={movies} />
    </div>
  );
}

export default Animations;
