import { getSeriesById } from "@/src/lib/actions";
import { notFound } from "next/navigation";
import SeriesDetails from "./SeriesDetails";

async function SeriesDetailsWrapper({ seriesId }: { seriesId: string }) {
  const series = await getSeriesById(seriesId);
  if (!series) notFound();

  return <SeriesDetails series={series} />;
}

export default SeriesDetailsWrapper;
