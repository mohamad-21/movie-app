"use client";
import { MovieEpisodeDetails } from "@/src/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  episode: MovieEpisodeDetails;
};

function EpisodeItem({ episode }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className="relative border border-zinc-800 rounded-lg overflow-hidden aspect-video"
      href={`${pathname}/video/${episode.key}`}
    >
      <img
        src={`http://img.youtube.com/vi/${episode.key}/maxresdefault.jpg`}
        className="w-full h-full"
        alt={episode.name}
      />
    </Link>
  );
}

export default EpisodeItem;
