"use client";
import ButtonIcon from "@/src/components/ButtonIcon";
import { useFavorites, useWatchlist } from "@/src/hooks";
import { MovieDetails as MovieDetailsType } from "@/src/types";
import {
  IconBookmark,
  IconBookmarkFilled,
  IconHeart,
  IconHeartFilled,
  IconShare3
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Loading from "../Loading";
import VotesCircle from "../VotesCircle";

type Props = {
  movie: MovieDetailsType;
};

function MovieDetails({ movie }: Props) {
  const [backdropLoaded, setBackdropLoaded] = useState(false);
  const hours = Math.floor(movie.runtime / 60);
  const minutes = Math.floor(movie.runtime % 60);
  const movieRuntime = `${hours}h ${minutes}m`;
  const pathname = usePathname();
  const { watchlist, setWatchlist, removeFromWatchlist } = useWatchlist();
  const { favorites, setFavorites, removeFromFavorites } = useFavorites();
  const isAddedToWatchlist = watchlist?.movies?.some(wMovie => wMovie.id === movie.id);
  const isAddedToFavorites = favorites?.movies?.some(fMovie => fMovie.id === movie.id);

  async function shareMovie() {
    await navigator.share({
      title: movie.title,
      text: movie.tagline,
      url: `${process.env.NEXT_PUBLIC_URL}${pathname}`
    })
  }

  function addItemToWatchlist() {
    setWatchlist(state => ({ ...state, movies: [movie, ...state.movies] }))
  }

  function removeItemFromWatchlist() {
    removeFromWatchlist(movie.id, "movie");
  }

  function addItemToFavorites() {
    setFavorites(state => ({ ...state, movies: [movie, ...state.movies] }))
  }

  function removeItemFromFavorites() {
    removeFromFavorites(movie.id, "movie");
  }

  return (
    <div className="relative">
      {(!backdropLoaded || !movie.backdrop_path) && (
        <div
          className={`flex items-center justify-center w-full min-h-[80dvh] bg-zinc-900`}
        >
          {movie.backdrop_path && <Loading />}
        </div>
      )}
      {movie.backdrop_path && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-[5]" />
          <img
            src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/original/${movie.backdrop_path}`}
            className={`w-full max-sm:aspect-square object-cover ${!backdropLoaded ? "hidden" : "flex"
              }`}
            alt="image"
            onLoad={() => setBackdropLoaded(true)}
          />
        </div>
      )}
      <div className="relative z-[6] -mt-36 px-7 left-0 right-0 flex flex-col md:gap-8 gap-4 max-w-5xl mx-auto max-md:-mt-48">
        <div className="flex flex-col gap-4">
          <h2 className="sm:text-4xl text-3xl">{movie.title}</h2>
          <ul className="flex items-center flex-wrap gap-6 list-disc md:text-sm text-xs text-zinc-400">
            {movie.genres.map((genre) => (
              <li key={genre.id} className="first:list-none">
                <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
              </li>
            ))}
            <li>
              <span>{movieRuntime}</span>
            </li>
            {movie.vote_average > 0 && (
              <li className="flex items-center gap-3">
                <VotesCircle vote={movie.vote_average} />
                <span>Vote average</span>
              </li>
            )}
          </ul>
        </div>
        <div className="flex items-center justify-between max-md:flex-col gap-7">
          <div className="flex items-center gap-5 max-md:mr-auto">
            {/* <Link href={`/movie/${movie.id}`}>
              <ButtonIcon
                className="px-4 font-bold text-sm"
                icon={
                  <div className="p-1 bg-zinc-900 rounded-full text-white">
                    <IconPlayerPlayFilled size="13" />
                  </div>
                }
              >
                Watch Now
              </ButtonIcon>
            </Link> */}
            <ButtonIcon
              color="gray"
              className={`px-4 font-bold text-sm ${isAddedToWatchlist ? "!bg-zinc-700 hover:!bg-red-600" : ""}`}
              icon={
                <div className="bg-white-900 rounded-full text-white">
                  {isAddedToWatchlist ? <IconBookmarkFilled size="20" /> : <IconBookmark size="20" />}
                </div>
              }
              onClick={() => isAddedToWatchlist ? removeItemFromWatchlist() : addItemToWatchlist()}
            >
              {isAddedToWatchlist ? "Remove from watchlist" : "Add to Watchlist"}
            </ButtonIcon>
          </div>
          <div className="flex items-center gap-3 max-md:mr-auto">
            <ButtonIcon
              color={isAddedToFavorites ? "red" : "gray"}
              icon={isAddedToFavorites ? <IconHeartFilled className="text-zinc-300" size="20" /> : <IconHeart className="text-zinc-300" size="20" />}
              onClick={() => isAddedToFavorites ? removeItemFromFavorites() : addItemToFavorites()}
            ></ButtonIcon>
            {/* <ButtonIcon
              color="gray"
              icon={<IconDownload className="text-zinc-300" size="20" />}
            ></ButtonIcon> */}
            <ButtonIcon
              onClick={shareMovie}
              color="gray"
              icon={<IconShare3 className="text-zinc-300" size="20" />}
            ></ButtonIcon>
          </div>
        </div>
        <p className="text-sm text-zinc-400 max-w-2xl">{movie.overview}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
