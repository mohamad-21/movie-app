import MovieEpisodesWrapper from "@/src/components/EpisodesWrapper";
import Loading from "@/src/components/Loading";
import MovieReviewsWrapper from "@/src/components/ReviewsWrapper";
import MovieTabs from "@/src/components/movies/MovieTabs";
import ActorsListWrapper from "@/src/components/persons/ActorsListWrapper";
import SeriesDetailsWrapper from "@/src/components/series/SeriesDetailsWrapper";
import SimilarSeries from "@/src/components/series/SimilarMoviesWrapper";
import { getSeriesById } from "@/src/lib/actions";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: { seriesId: string };
  searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { seriesId } = params;
  const series = await getSeriesById(seriesId);
  if (!series)
    return {
      title: "Series not found",
    };
  return {
    title: series.name,
  };
}

async function SeriesPage({ params, searchParams }: Props) {
  const { seriesId } = params;
  const { reviews } = searchParams;

  return (
    <div className="grid grid-cols-1 gap-8">
      <div>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60dvh]">
              <Loading />
            </div>
          }
        >
          <SeriesDetailsWrapper seriesId={seriesId} />
        </Suspense>
      </div>
      <div className="px-7 w-full max-w-5xl mx-auto grid grid-cols-1 gap-14">
        <Suspense fallback={<Loading />}>
          <ActorsListWrapper seriesId={seriesId} />
        </Suspense>
        <MovieTabs />
        <div>
          <Suspense fallback={<Loading />} key={Math.random() * 1000}>
            {reviews && reviews === "true" ? (
              <MovieReviewsWrapper seriesId={seriesId} />
            ) : (
              <MovieEpisodesWrapper seriesId={seriesId} />
            )}
          </Suspense>
        </div>
        <Suspense fallback={<Loading />}>
          <SimilarSeries seriesId={seriesId} />
        </Suspense>
      </div>
    </div>
  )
}

export default SeriesPage;
