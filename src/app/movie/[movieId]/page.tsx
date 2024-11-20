import Loading from "@/src/components/Loading";
// import MovieDetails from "@/src/components/templates/MovieDetails";
import MovieEpisodesWrapper from "@/src/components/EpisodesWrapper";
import MovieDetailsWrapper from "@/src/components/movies/MovieDetailsWrapper";
import MovieTabs from "@/src/components/movies/MovieTabs";
import SimilarMoviesWrapper from "@/src/components/movies/SimilarMoviesWrapper";
import ActorsListWrapper from "@/src/components/persons/ActorsListWrapper";
import MovieReviewsWrapper from "@/src/components/ReviewsWrapper";
import { getMovieById } from "@/src/lib/actions";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: { movieId: string };
  searchParams: { [key: string]: string | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { movieId } = params;
  const movie = await getMovieById(movieId);
  if (!movie)
    return {
      title: "Movie not found",
    };
  return {
    title: movie.title,
  };
}

async function MoviePage({ params, searchParams }: Props) {
  const { movieId } = params;
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
          <MovieDetailsWrapper movieId={movieId} />
        </Suspense>
      </div>
      <div className="px-7 w-full max-w-5xl mx-auto flex flex-col gap-14">
        <Suspense fallback={<Loading />}>
          <ActorsListWrapper movieId={movieId} />
        </Suspense>
        <MovieTabs />
        <Suspense fallback={<Loading />} key={Math.random() * 1000}>
          {reviews && reviews === "true" ? (
            <MovieReviewsWrapper movieId={movieId} />
          ) : (
            <MovieEpisodesWrapper movieId={movieId} />
          )}
        </Suspense>
        <Suspense fallback={<Loading />}>
          <SimilarMoviesWrapper movieId={movieId} />
        </Suspense>
      </div>
    </div>
  );
}

export default MoviePage;
