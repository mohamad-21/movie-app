"use client";
import React, { useState } from "react";
import Button from "../Button";

function PersonBiography({ bio }: { bio: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`relative ${(bio.length > 320 && !expanded)
      ? "after:content-[''] after:absolute after:bg-gradient-to-b after:from-transparent after:to-background after:bottom-0 after:left-0 after:w-full after:h-12 max-h-[200px]"
      : "max-h-[2000px]"
      } overflow-hidden duration-700`}
    >
      <p className="sm:text-base text-xs text-zinc-400">{bio}</p>
      <Button className={`${bio.length > 320 && !expanded ? "absolute bottom-0" : ""} max-sm:text-xs !p-0 text-sky-400 right-0 ml-auto mr-3 block z-[2]`} color="ghost" onClick={() => setExpanded(!expanded)}>{expanded ? "Read Less" : "Read More"}</Button>
    </div>
  );
}

export default PersonBiography;
