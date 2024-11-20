"use client";
import React, { useState } from "react";
import { Actor } from "@/src/types";
import Link from "next/link";
import { IconUserFilled } from "@tabler/icons-react";

function ActorItem({ actor, onRouteChange }: { actor: Actor, onRouteChange: () => any }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      onClick={onRouteChange}
      href={`/person/${actor.id}`}
      className="flex items-center justify-start gap-2 hover:opacity-60 duration-200 whitespace-nowrap"
    >
      {!imageLoaded && (
        <div className="flex items-center justify-center w-full flex-1">
          <IconUserFilled size="40" color="gray" />
        </div>
      )}
      <img
        src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/w500/${actor.profile_path}`}
        className={`rounded-full object-cover w-11 h-11 flex-shrink-0 ${!imageLoaded ? "hidden" : "flex"}`}
        alt={actor.name}
        onLoad={() => setImageLoaded(true)}
      />
      <div className="text-xs flex flex-col">
        <span className="font-bold mb-1">{actor.name}</span>
        <span className="text-zinc-400">{actor.character}</span>
      </div>
    </Link>
  );
}

export default ActorItem;
