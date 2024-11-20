import MoviesList from "@/src/components/movies/MoviesList";
import { getSimilarSeries } from "@/src/lib/actions";
import ListHeader from "../ListHeader";

async function SimilarSeries({ seriesId }: { seriesId: string }) {
  const similarMoviesResult = await getSimilarSeries(seriesId);
  if (!similarMoviesResult?.results.length) return null;

  const series = similarMoviesResult.results.slice(0, 7);

  return (
    <div>
      <ListHeader title="More Like This" />
      <MoviesList type="series" movies={series.map(ser => {
        return {
          id: ser.id,
          title: ser.name,
          poster_path: ser.poster_path
        }
      })} noSlider />
    </div>
  );
}

export default SimilarSeries;
