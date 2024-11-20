"use client";
import ButtonIcon from "@/src/components/ButtonIcon";
import { useFavorites, useWatchlist } from "@/src/hooks";
import { SeriesDetails as SeriesDetailsType } from "@/src/types";
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
import ListHeader from "../ListHeader";
import Loading from "../Loading";
import VotesCircle from "../VotesCircle";
import { InfoItem } from "../persons/PersonInfo";
import SeriesSeasons from "./SeriesSeasons";

type Props = {
  series: SeriesDetailsType;
};

function SeriesDetails({ series }: Props) {
  const [backdropLoaded, setBackdropLoaded] = useState(false);
  // const hours = Math.floor(series.runtime / 60);
  // const minutes = Math.floor(series.runtime % 60);
  // const seriesRuntime = `${hours}h ${minutes}m`;
  const pathname = usePathname();
  const { watchlist, setWatchlist, removeFromWatchlist } = useWatchlist();
  const { favorites, setFavorites, removeFromFavorites } = useFavorites();
  const isAddedToWatchlist = watchlist?.series?.some(wSeries => wSeries.id === series.id);
  const isAddedToFavorites = favorites?.series?.some(fSeries => fSeries.id === fSeries.id);

  async function shareSeries() {
    await navigator.share({
      title: series.name,
      text: series.tagline,
      url: `${process.env.NEXT_PUBLIC_URL}${pathname}`
    })
  }

  function addItemToWatchlist() {
    setWatchlist(state => ({ ...state, series: [series, ...state.series] }))
  }

  function removeItemFromWatchlist() {
    removeFromWatchlist(series.id, "series");
  }

  function addItemToFavorites() {
    setFavorites(state => ({ ...state, series: [series, ...state.series] }))
  }

  function removeItemFromFavorites() {
    removeFromFavorites(series.id, "series");
  }

  return (
    <div className="relative">
      {(!backdropLoaded || !series.backdrop_path) && (
        <div
          className={`flex items-center justify-center w-full min-h-[80dvh] bg-zinc-900`}
        >
          {series.backdrop_path && <Loading />}
        </div>
      )}
      {series.backdrop_path && (
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-[5]" />
          <img
            src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/original/${series.backdrop_path}`}
            className={`w-full max-sm:aspect-square object-cover ${!backdropLoaded ? "hidden" : "flex"
              }`}
            alt="image"
            onLoad={() => setBackdropLoaded(true)}
          />
        </div>
      )}
      <div className="relative z-[6] -mt-36 px-7 left-0 right-0 flex flex-col md:gap-8 gap-5 max-w-5xl mx-auto max-md:-mt-48">
        <div className="flex flex-col gap-4">
          <h2 className="sm:text-4xl text-3xl">{series.name}</h2>
          <ul className="flex items-center flex-wrap gap-6 list-disc md:text-sm text-xs text-zinc-400">
            {series.genres.map((genre) => (
              <li key={genre.id} className="first:list-none">
                <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
              </li>
            ))}
            {/* <li className="list-disc">
            <span>{seriesRuntime}</span>
          </li> */}
            <li>
              <div className="flex items-center gap-3">
                <VotesCircle vote={series.vote_average} />
                <span className="inline">Vote average</span>
              </div>
            </li>
            {series?.networks?.length > 0 && series.networks.map(network => (
              <li className={`list-none ${network.logo_path ? "" : "hidden"}`} key={network.id}>
                <img src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/w500/${network.logo_path}`} width="60" height="60" alt={network.name} />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-between max-md:flex-col gap-7">
          <div className="flex items-center gap-5 max-md:mr-auto">
            {/* <Link href={`/series/${series.id}`}>
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
            <Link href={`/series/${series.id}`}>
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
            </Link>
          </div>
          <div className="flex items-center gap-3 max-md:ml-auto">
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
              onClick={shareSeries}
              color="gray"
              icon={<IconShare3 className="text-zinc-300" size="20" />}
            ></ButtonIcon>
          </div>
        </div>
        <div className="grid gap-5">
          <p className="text-sm text-zinc-400 max-w-2xl">{series.overview}</p>
          <div className="grid gap-3">
            <InfoItem title="Status" value={series.status} />
            <InfoItem title="Spoken Languages" value={<div>{series.spoken_languages.map(lang => lang.name).join(",")}</div>} />
          </div>
        </div>
        <div>
          <ListHeader title="Seasons" />
          <SeriesSeasons seasons={series.seasons} />
        </div>
      </div>
    </div>
  );
}

export default SeriesDetails;
