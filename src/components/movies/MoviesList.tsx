"use client";
import PageChangeLoading from "@/src/components/PageChangeLoading";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieItem from "./MovieItem";

interface Props {
  movies: { poster_path: string, title: string, id: number }[];
  noSlider?: boolean;
  onlyImage?: boolean;
  type?: "series" | "movie" | "person";
  removable?: boolean;
  isWatchlist?: boolean
}

function MoviesList({ movies, noSlider = false, onlyImage = true, type = "movie", removable = false, isWatchlist }: Props) {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <>
      {noSlider ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {movies.map((movie, idx) => (
            <MovieItem
              movie={movie}
              key={idx}
              onRouteChange={() => setShowLoading(true)}
              onlyImage={onlyImage}
              type={type}
              removable={removable}
              isWatchlist={isWatchlist}
            />
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Navigation]}
          navigation
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            420: {
              slidesPerView: 2,
            },
            650: {
              slidesPerView: 3,
            },
            840: {
              slidesPerView: 4,
            },
            1000: {
              slidesPerView: 5,
            },
          }}
          spaceBetween={20}
        >
          {movies.map((movie, idx) => (
            <SwiperSlide key={idx}>
              <MovieItem
                movie={movie}
                onRouteChange={() => setShowLoading(true)}
                type={type}
                removable={removable}
                isWatchlist={isWatchlist}
                onlyImage={onlyImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {showLoading && <PageChangeLoading />}
    </>
  )
}

export default MoviesList;
