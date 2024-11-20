import { getMovieActors, getSeriesActors } from "@/src/lib/actions";
import ActorsList from "./ActorsList";

async function ActorsListWrapper({ movieId, seriesId }: { movieId?: string, seriesId?: string }) {
  if (!movieId && !seriesId) return null;
  const actorsResult = movieId ? await getMovieActors(movieId) : await getSeriesActors(seriesId!);
  if (!actorsResult) return null
  if (!actorsResult || actorsResult.cast.length < 1) return null;

  return <ActorsList actors={actorsResult.cast} />;
}

export default ActorsListWrapper;
