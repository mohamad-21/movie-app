"use client";
import { SeriesDetails } from "@/src/types";
import { IconPhoto } from "@tabler/icons-react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import VotesCircle from "../VotesCircle";

function SeriesSeasons({ seasons }: { seasons: SeriesDetails["seasons"] }) {
  return (
    <Swiper
      breakpoints={{
        200: {
          slidesPerView: 1,
        },
        800: {
          slidesPerView: 2,
        },
        1100: {
          slidesPerView: 3,
        },
      }} navigation modules={[Navigation]} spaceBetween={30}>
      {seasons.map(season => (
        <SwiperSlide key={season.id}>
          <div className="flex items-start gap-6">
            <div>
              {season.poster_path ? (
                <img src={`${process.env.NEXT_PUBLIC_API_IMAGE_BASEPATH}/w500/${season.poster_path}`} width="150" alt={`Season ${season.season_number}`} />
              ) : (

                <div className={`flex items-center justify-center w-full min-h-[243px] flex-1 bg-zinc-900 px-10`}> <IconPhoto size="70" color="gray" />
                </div>
              )}
            </div>
            <div className="grid gap-4 py-3 lg:text-sm text-xs">
              <h3 className="text-xl">Season {season.season_number}</h3>
              <div>Published at <span className="text-zinc-400">{new Date(season.air_date).toLocaleDateString("en-us", { dateStyle: "long" })}</span></div>
              <div>{season.episode_count} Episodes</div>
              {season.vote_average > 0 ? (
                <div className="flex items-center gap-3">
                  <VotesCircle vote={season.vote_average} />
                  <span className="text-sm">Votes average</span>
                </div>
              ) : (
                <span className="text-xs">no one voted yet</span>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default SeriesSeasons;
