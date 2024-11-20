"use client";
import { IconPhoto, IconUserFilled, IconX } from '@tabler/icons-react';
import Link from "next/link";
import { useState } from 'react';
import Loading from '../Loading';
import { useWatchlist } from "@/src/hooks";

interface Props {
  movie: { poster_path: string, title: string, id: number };
  onRouteChange: () => any;
  onlyImage?: boolean;
  type?: "series" | "movie" | "person";
  removable?: boolean;
  isWatchlist?: boolean;
}

function MovieItem({ movie, onRouteChange, onlyImage, type = "movie", removable, isWatchlist }: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageHeight, setImageHeight] = useState("263px");
  const [isRemoved, setIsRemoved] = useState(false);
  const { removeFromWatchlist } = useWatchlist();

  function handleRemove() {
    if (isWatchlist && removable) {
      const removeType = type === "movie" ? "movie" : "series";
      removeFromWatchlist(movie.id, removeType);
      setIsRemoved(true);
    }
  }

  if (isRemoved) return null;

  return (
    <div className="relative border border-zinc-700 rounded-lg overflow-hidden">
      {removable && (
        <button className="absolute top-3 right-3 bg-background text-white p-2 rounded-full" onClick={handleRemove}>
          <IconX size="20" />
        </button>
      )}
      <Link
        onClick={onRouteChange}
        href={`/${type}/${movie.id}`}
        className="flex flex-col"
      >
        {movie.poster_path ? (
          <>
            {!imageLoaded && (
              <div className={`items-center justify-center w-full h-full min-h-[263px] ${imageLoaded ? "hidden" : "flex"}`}>
                <Loading />
              </div>
            )}
            <img
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/w500/${movie.poster_path}`}
              className={`max-w-full ${imageLoaded ? "block" : "hidden"} flex-1 `}
              alt={movie.title}
              onLoad={(e) => {
                setImageLoaded(true);
                setImageHeight(`${e.currentTarget.height}px`)
              }}
            />
          </>
        ) : (
          <div className={`flex items-center justify-center w-full h-full ${imageHeight ? `min-h-[${imageHeight}]` : "min-h-[263px]"} flex-1`}>
            {type === "person" && <IconUserFilled size="70" color="gray" />}
            {(type === "movie" || type === "series") && <IconPhoto size="70" color="gray" />}
          </div>
        )}
        {!onlyImage && (
          <div className="p-3 text-center bg-zinc-900 ">
            <p className="text-xs truncate">{movie.title}</p>
          </div>
        )}
      </Link>
    </div>
  );
}

export default MovieItem;
