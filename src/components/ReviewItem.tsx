"use client";
import React, { useState } from "react";
import { ReviewProps } from "@/src/types";
import Button from "@/src/components/Button";

type Props = {
  review: ReviewProps;
};

function ReviewItem({ review }: Props) {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="flex items-start gap-4 bg-[#111] p-6 rounded-lg">
      <img
        src={`${review.author_details.avatar_path
          ? `${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/w500/${review.author_details.avatar_path}`
          : "https://static.vecteezy.com/system/resources/previews/009/292/244/large_2x/default-avatar-icon-of-social-media-user-vector.jpg"
          }`}
        alt={review.author}
        className="w-[60px] h-[60px] rounded-full flex-shrink-0"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl">{review.author}</h3>
        <p className="text-sm text-zinc-400 bg-gradient-to-b" dangerouslySetInnerHTML={{
          __html: review.content.length > 300
            ? (showMore ? review.content : `${review.content.slice(0, 300)}...`)
            : review.content
        }}>
        </p>
        {review.content.length > 300 && (
          <Button
            color="gray"
            className="max-w-max mt-3 text-xs"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Show More"}
          </Button>
        )}
      </div>
    </div>
  );
}

export default ReviewItem;
