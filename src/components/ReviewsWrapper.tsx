import React from "react";
import Reviews from "./Reviews";
import { getMovieReviews, getSeriesReviews } from "@/src/lib/actions";
import ListHeader from "@/src/components/ListHeader";

async function ReviewsWrapper({ movieId, seriesId }: { movieId?: string, seriesId?: string }) {
  if (!movieId && !seriesId) {
    return (
      <div>
        <ListHeader title="There are no reviews to show" />
      </div>
    )
  }
  const reviewsResult = movieId ? await getMovieReviews(movieId) : await getSeriesReviews(seriesId!);
  const reviews = reviewsResult?.results;

  return (
    <div>
      {reviews && reviews.length > 0 ? (
        <>
          <ListHeader title="Reviews" />
          <Reviews reviews={reviews!} />
        </>
      ) : (
        <ListHeader title="There are no reviews to show" />
      )}
    </div>
  );
}

export default ReviewsWrapper;
