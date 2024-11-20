import React from "react";
import { ReviewProps } from "@/src/types";
import ReviewItem from "./ReviewItem";

type Props = {
  reviews: ReviewProps[];
};

function Reviews({ reviews }: Props) {
  return (
    <div className="flex flex-col gap-8">
      {reviews.map((review) => (
        <ReviewItem review={review} key={review.id} />
      ))}
    </div>
  );
}

export default Reviews;
