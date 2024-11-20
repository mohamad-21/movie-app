"use client";
import Button from "@/src/components/Button";
import EpisodeItem from "@/src/components/EpisodeItem";
import { MovieEpisodeDetails } from "@/src/types";
import { useRef, useState } from "react";
import ListHeader from "./ListHeader";

function VideosList({ episodes }: { episodes: MovieEpisodeDetails[] }) {
  const [showFullVideos, setShowFullVideos] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={listRef}>
      <ListHeader
        title={
          episodes.length > 0
            ? `1-${episodes.length} Videos(Trailers and Clips)`
            : "There are no videos to show"
        }
      />
      {episodes.length > 0 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {showFullVideos
              ? episodes.map((episode) => (
                <EpisodeItem episode={episode} key={episode.id} />
              ))
              : episodes
                .slice(0, 4)
                .map((episode) => (
                  <EpisodeItem episode={episode} key={episode.id} />
                ))}
          </div>
          {episodes.length > 4 && (
            <Button
              color="gray"
              onClick={() => {
                setShowFullVideos(!showFullVideos);
                if (showFullVideos && listRef.current) {
                  listRef.current?.scrollIntoView(true);
                }
              }}
              className="flex mx-auto mt-7"
            >
              {showFullVideos ? "Show Less" : "Show More"}
            </Button>
          )}
        </>
      )}
    </div>
  );
}

export default VideosList;
