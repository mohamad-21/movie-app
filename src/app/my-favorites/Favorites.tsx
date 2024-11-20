"use client";
import ListHeader from "@/src/components/ListHeader";
import MoviesList from "@/src/components/movies/MoviesList";
import PageTitle from "@/src/components/PageTitle";
import { useFavorites } from "@/src/hooks";
import { useEffect, useState } from "react";

function Favorites() {
  const { favorites } = useFavorites();
  const isClear = (!favorites.movies.length && !favorites.series.length);
  const { movies, series } = favorites;
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <PageTitle>My Favorties</PageTitle>
      {isClear ? (
        <p>You&apos;ve no anything in your Favorties</p>
      ) : (
        <div className="grid grid-cols-1 gap-10 mt-12">
          {movies.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              <ListHeader title="Movies" />
              <MoviesList removable isWatchlist noSlider movies={movies} />
            </div>
          )}
          {series.length > 0 && (
            <div className="grid grid-cols-1 gap-4">
              <ListHeader title="Series" />
              <MoviesList removable isWatchlist noSlider type="series" movies={series.map(ser => {
                return {
                  title: ser.name,
                  id: ser.id,
                  poster_path: ser.poster_path
                }
              })} />
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default Favorites;
