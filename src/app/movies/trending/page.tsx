import Loading from "@/src/components/Loading";
import TrendingMoviesList from "@/src/components/movies/TrendingMoviesList";
import PageTitle from "@/src/components/PageTitle";
import Section from "@/src/components/Section";
import { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | undefined }
}

export const metadata = {
  title: "Trending Movies"
}

async function TrendingMoviesPage({ searchParams }: Props) {
  const params = await searchParams;

  return (
    <Section className="pt-10">
      <PageTitle>Trending Movies</PageTitle>
      <Suspense fallback={<Loading />} key={params?.page}>
        <TrendingMoviesList params={params} />
      </Suspense>
    </Section>
  )
}

export default TrendingMoviesPage;
