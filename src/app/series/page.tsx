import Filter from "@/src/components/Filter";
import Loading from "@/src/components/Loading";
import PageTitle from "@/src/components/PageTitle";
import Section from "@/src/components/Section";
import SeriesList from "@/src/components/series/SeriesList";
import { seriesSortOptions } from "@/src/constants";
import React, { Suspense } from "react";

type Props = {
  searchParams: { [key: string]: string | undefined }
}

async function Page({ searchParams }: Props) {
  const params = searchParams;
  return (
    <Section className="pt-10">
      <div className="flex items-center justify-between gap-5">
        <PageTitle>Series</PageTitle>
        <Filter title="Sort by" items={seriesSortOptions} />
      </div>
      <div>
        <Suspense fallback={<Loading />} key={`${params?.page}${params?.sort_by}`}>
          <SeriesList params={params} />
        </Suspense>
      </div>
    </Section>
  )
}

export default Page;
