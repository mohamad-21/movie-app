"use client";
import { Actor } from "@/src/types";
import { usePathname } from "next/navigation";
import ListHeader from "../ListHeader";
import ActorItem from "./ActorItem";
import { useState } from "react";
import PageChangeLoading from "../PageChangeLoading";

function ActorsList({ actors }: { actors: Actor[] }) {
  const [showLoading, setShowLoading] = useState(false);
  const pathname = usePathname();

  return (
    <div className="overflow-hidden">
      <ListHeader title="Top Cast" />
      <div className="flex flex-wrap items-center gap-5">
        {actors!.slice(0, 8).map((actor) => (
          <ActorItem actor={actor} onRouteChange={() => setShowLoading(true)} key={actor.id} />
        ))}
      </div>
      {showLoading && <PageChangeLoading />}
    </div>
  );
}

export default ActorsList;
