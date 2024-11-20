import Filter from "@/src/components/Filter";
import Loading from "@/src/components/Loading";
import MoviesFullList from "@/src/components/movies/MoviesFullList";
import PageTitle from "@/src/components/PageTitle";
import Section from "@/src/components/Section";
import { genresList, movieSortOptions } from "@/src/constants";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

type Props = {
  params: { genreId: string };
  searchParams: { [key: string]: string | undefined }
}

async function Page({ params, searchParams }: Props) {
  const { genreId } = params;
  const queryParameters = searchParams;
  const genre = genresList.find(genre => genre.id === parseInt(genreId));
  if (!genre) notFound();

  return (
    <Section className="pt-10">
      <div className="flex items-center justify-between gap-5">
        <PageTitle>{genre.name} Movies</PageTitle>
        <Filter title="Sort by" items={movieSortOptions} />
      </div>
      <div>
        <Suspense fallback={<Loading />} key={`${queryParameters?.sort_by}${queryParameters?.page}${genre}`}>
          <MoviesFullList params={queryParameters} genre={genreId} />
        </Suspense>
      </div>
    </Section>
  )
}

export default Page;
