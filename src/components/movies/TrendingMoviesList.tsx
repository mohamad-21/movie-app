import { getTrendingMovies } from "@/src/lib/actions";
import MoviesList from "./MoviesList";
import Pagination from "../Pagination";

type Props = {
  params?: { [q: string]: string | undefined };
}

async function TrendingMoviesList({ params }: Props) {
  const time = ["day", "week"].includes(params?.filter_trendings || "") ? params?.filter_trendings : "day";
  const data = await getTrendingMovies({ time, page: params?.page });
  const movies = data!.results;

  return (
    <div>
      <MoviesList noSlider onlyImage={false} movies={movies} />
      <Pagination totalPages={data!.total_pages} currentPage={data!.page} />
    </div>
  );
}

export default TrendingMoviesList;
