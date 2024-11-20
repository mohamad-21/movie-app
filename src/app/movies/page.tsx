import Filter from "@/src/components/Filter";
import Loading from "@/src/components/Loading";
import MoviesFullList from "@/src/components/movies/MoviesFullList";
import PageTitle from "@/src/components/PageTitle";
import Section from "@/src/components/Section";
import { movieSortOptions } from "@/src/constants";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | undefined }
}

export const metadata = {
  title: "Movies"
}

async function Page({ searchParams }: Props) {
  const params = searchParams;
  return (
    <Section className="pt-10">
      <div className="flex items-center justify-between gap-5">
        <PageTitle>Movies</PageTitle>
        <Filter title="Sort by" items={movieSortOptions} />
      </div>
      <div>
        <Suspense fallback={<Loading />} key={`${params?.page}${params?.sort_by}`}>
          <MoviesFullList params={params} />
        </Suspense>
      </div>
    </Section>
  )
}

export default Page;
