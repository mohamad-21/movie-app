import MoviesList from "@/src/components/movies/MoviesList";
import { getSeriesList } from "@/src/lib/actions";
import Pagination from "../Pagination";

// not page params. is searchParams
type Props = {
  params?: { [q: string]: string | undefined };
}

async function SeriesList({ params }: Props) {
  const data = await getSeriesList({ page: params?.page, sort_by: params?.sort_by });
  const series = data!.results;

  return (
    <div>
      <MoviesList type="series" onlyImage={false} noSlider movies={series.map(ser => {
        return {
          id: ser.id,
          title: ser.name,
          poster_path: ser.poster_path,
        }
      })} />
      <Pagination totalPages={data!.total_pages} currentPage={data!.page} />
    </div>
  );
}

export default SeriesList;
