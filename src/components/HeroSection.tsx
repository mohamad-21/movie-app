import ButtonIcon from "@/src/components/ButtonIcon";
import { getMovieById } from "@/src/lib/actions";
import { IconChevronRight } from "@tabler/icons-react";
import Link from "next/link";

async function HeroSection() {
  const movie = await getMovieById(1100782);
  // const moviesResult = await getPopularMovies();
  // if (!moviesResult) return;
  if (!movie) return;
  // const i = Math.floor(Math.random() * moviesResult.results.length);
  // const movie = moviesResult.results[i];
  // const hours = Math.floor(movie.runtime / 60);
  // const minutes = Math.floor(movie.runtime % 60);
  // const movieRuntime = `${hours}h ${minutes}m`;

  return (
    <div className="min-h-[70dvh] relative flex">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-[5]" />
        <img
          src={`${process.env.API_IMAGE_BASEPATH}/original/${movie.backdrop_path}`}
          className="w-full max-[950px]:aspect-square object-cover"
          alt="image"
        />
      </div>
      <div className="absolute mx-auto left-0 right-0 md:bottom-20 sm:bottom-32 bottom-16 max-w-max text-center flex flex-col gap-4 z-[6]">
        <div>
          <h1 className="text-3xl font-extrabold mb-4">
            {movie.title}
          </h1>
          <p className="max-md:text-sm">{movie.tagline}</p>
        </div>
        {/* <ul className="flex items-center justify-center gap-6 list-disc md:text-sm text-xs text-zinc-400">
          {movie.genres.map((genre) => (
            <li key={genre.id} className="first:list-none">
              <Link href={`/genre/${genre.id}`}>{genre.name}</Link>
            </li>
          ))}
          <li>
            <span>{movieRuntime}</span>
          </li>
        </ul> */}
        <span className="md:text-sm text-xs text-zinc-400 md:max-w-lg max-w-xs">
          {movie.overview}
        </span>
        <Link href={`/movie/${movie.id}`}>
          <ButtonIcon
            className="px-4 font-bold text-sm gap-1"
            dir="rtl"
            icon={
              <IconChevronRight size="18" />
            }
          >
            More Info
          </ButtonIcon>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
