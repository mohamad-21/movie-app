import ListHeader from "@/src/components/ListHeader";
import MoviesList from "@/src/components/movies/MoviesList";
import PageTitle from "@/src/components/PageTitle";
import Section from "@/src/components/Section";
import { getSearchResults } from "@/src/lib/actions";
import { MovieSearchResult, PeopleSearchResult, TVSearchResult } from "@/src/types";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | undefined }
}

async function SearchPage({ searchParams }: Props) {
  const { q } = searchParams;

  if (!q) {
    return (
      <div className="px-7 pt-10 max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center h-full">
          <h2 className="sm:text-2xl text-xl">Search Movies, Series and People...</h2>
        </div>
      </div>
    )
  }

  const data = await getSearchResults(q);

  if (!data || data.results.length < 1) {
    return (
      <div className="px-7 pt-10 max-w-5xl mx-auto w-full">
        <div>
          <h2 className="sm:text-2xl text-xl">No results founded for <span className="text-red-500">{q}</span></h2>
        </div>
      </div>
    )
  }

  const movies: MovieSearchResult[] = data.results.filter(item => item.media_type === "movie");
  const tvShows: TVSearchResult[] = data.results.filter(item => item.media_type === "tv");
  const people: PeopleSearchResult[] = data.results.filter(item => item.media_type === "person");

  return (
    <Section className="pt-10">
      <PageTitle>
        Search results for <span className="text-red-500">{q}</span>
      </PageTitle>
      <div className="grid gap-12 mt-12">
        {movies.length > 0 && (
          <div>
            <ListHeader title="Movies" />
            <MoviesList type="movie" onlyImage={false} noSlider movies={movies.map(movie => {
              return {
                poster_path: movie.poster_path,
                title: movie.title,
                id: movie.id,
              }
            })} />
          </div>
        )}
        {tvShows.length > 0 && (
          <div>
            <ListHeader title="Series" />
            <MoviesList type="series" onlyImage={false} noSlider movies={tvShows.map(tv => {
              return {
                poster_path: tv.poster_path,
                title: tv.name,
                id: tv.id,
              }
            })} />
          </div>
        )}
        {people.length > 0 && (
          <div>
            <ListHeader title="People" />
            <MoviesList type="person" onlyImage={false} noSlider movies={people.map(person => {
              return {
                poster_path: person.profile_path,
                title: person.name,
                id: person.id,
              }
            })} />
          </div>
        )}
      </div>
    </Section>
  )
}

export default SearchPage;
