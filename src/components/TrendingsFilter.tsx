"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Button from "./Button";

function TrendingsFilter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const filter = searchParams.get("filter_trendings") || "day";

  function changeFilter(value: "day" | "week") {
    const params = new URLSearchParams(searchParams);
    params.set("filter_trendings", value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex items-center gap-2">
      <Button className="py-1.5 px-5" color={filter === "day" ? "white" : "gray"} onClick={() => changeFilter("day")}>Day</Button>
      <Button className="py-1.5 px-5" color={filter === "week" ? "white" : "gray"} onClick={() => changeFilter("week")}>Week</Button>
    </div>
  )
}

export default TrendingsFilter;
