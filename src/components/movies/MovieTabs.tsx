"use client";
import Button from "@/src/components/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function MovieTabs() {
  const searchParams = useSearchParams();
  const [currentTab, setCurrentTab] = useState<"episodes" | "reviews">(
    searchParams.get("reviews") ? "reviews" : "episodes"
  );
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (searchParams.get("reviews") && searchParams.get("reviews") === "true") {
      return setCurrentTab("reviews");
    }
    return setCurrentTab("episodes");
  }, [searchParams]);

  return (
    <div className="flex items-center gap-4 text-xs font-extrabold">
      <Button
        color={currentTab === "episodes" ? "white" : "ghost"}
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.delete("reviews");
          router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
          });
        }}
      >
        Videos
      </Button>
      <Button
        color={currentTab === "reviews" ? "white" : "ghost"}
        onClick={() => {
          const params = new URLSearchParams(searchParams);
          params.set("reviews", "true");
          router.replace(`${pathname}?${params.toString()}`, {
            scroll: false,
          });
        }}
      >
        Reviews
      </Button>
    </div>
  );
}

export default MovieTabs;
