"use client";

import { useEffect, useState } from "react";
import { FavoritesType, WatchlistType } from "./types";

export const useTheme = () => {
  const [theme, setTheme] = useState<"dark" | "light">();

  useEffect(() => {
    if (window !== undefined) {
      setTheme(
        matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      );
    }
  }, [theme]);

  return { theme, setTheme };
};

export function useWatchlist() {
  const [watchlist, setWatchlist] = useState<WatchlistType>({ movies: [], series: [] });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const jsonWatchlist = localStorage.getItem("watchlist");
    if (!jsonWatchlist) {
      setWatchlist({ movies: [], series: [] })
    } else {
      const newWatchlist: WatchlistType = JSON.parse(jsonWatchlist);
      if (!newWatchlist.movies || !newWatchlist.series) {
        setWatchlist({ movies: [], series: [] })
      }
      setWatchlist(newWatchlist);
    }
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  }, [watchlist, setWatchlist, isMounted]);

  function removeFromWatchlist(id: number | string, type: "movie" | "series") {
    if (type === "movie") {
      const newWatchlistData = { ...watchlist, movies: watchlist.movies.filter(movie => movie.id as number !== id as number) };
      setWatchlist(newWatchlistData);
    }
    if (type === "series") {
      const newWatchlistData = { ...watchlist, series: watchlist.series.filter(series => series.id as number !== id as number) };
      setWatchlist(newWatchlistData);
    }
  }

  return { watchlist, setWatchlist, removeFromWatchlist };
}

export function useFavorites() {
  const [favorites, setFavorites] = useState<FavoritesType>({ movies: [], series: [] });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const jsonFavorites = localStorage.getItem("favorites");
    if (!jsonFavorites) {
      setFavorites({ movies: [], series: [] })
    } else {
      const newFavorites: FavoritesType = JSON.parse(jsonFavorites);
      if (!newFavorites.movies || !newFavorites.series) {
        setFavorites({ movies: [], series: [] })
      }
      setFavorites(newFavorites);
    }

    setIsMounted(true);
  }, []);

  useEffect(() => {
    console.log(isMounted)
    if (isMounted) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, setFavorites, isMounted]);

  function removeFromFavorites(id: number | string, type: "movie" | "series") {
    if (type === "movie") {
      const newFavoritesData = { ...favorites, movies: favorites.movies.filter(movie => movie.id as number !== id as number) };
      setFavorites(newFavoritesData);
    }
    if (type === "series") {
      const newFavoritesData = { ...favorites, series: favorites.series.filter(series => series.id as number !== id as number) };
      setFavorites(newFavoritesData);
    }
  }

  return { favorites, setFavorites, removeFromFavorites };
}