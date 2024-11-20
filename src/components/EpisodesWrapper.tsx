import { getMovieEpisodes, getSeriesEpisodes } from "@/src/lib/actions";
import React from "react";
import VideosList from "@/src/components/VideosList";

async function EpisodesWrapper({ movieId, seriesId }: { movieId?: string, seriesId?: string }) {
  if (!movieId && !seriesId) {
    return <VideosList episodes={[]} />;
  }
  const episodesResult = movieId ? await getMovieEpisodes(movieId) : await getSeriesEpisodes(seriesId!);

  const episodes = episodesResult?.results || [];

  return <VideosList episodes={episodes} />;
}

export default EpisodesWrapper;
