import MoviesList from "@/src/components/movies/MoviesList";
import { getDiscoverMovies } from "@/src/lib/actions";
import Pagination from "../Pagination";

// not page params. is searchParams
type Props = {
  params?: { [q: string]: string | undefined };
  genre?: number | string
}

async function MoviesFullList({ params, genre }: Props) {
  const data = await getDiscoverMovies({ page: params?.page, sort_by: params?.sort_by, genre });
  const movies = data!.results;

  return (
    <div>
      <MoviesList onlyImage={false} noSlider movies={movies} />
      <Pagination totalPages={data!.total_pages} currentPage={data!.page} />
    </div>
  );
}

export default MoviesFullList;
