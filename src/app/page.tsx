import HeroSection from "@/src/components/HeroSection";
import Loading from "@/src/components/Loading";
import Actions from "@/src/components/movies/Actions";
import Animations from "@/src/components/movies/Animations";
import MostPopulars from "@/src/components/movies/MostPopulars";
import Adventures from "@/src/components/movies/Adventures";
import Trendings from "@/src/components/movies/Trendings";
import { Suspense } from "react";
import ListHeader from "../components/ListHeader";
import TrendingsFilter from "../components/TrendingsFilter";

export const metadata = {
  title: "Home",
};

type Props = {
  searchParams: { [key: string]: string | undefined }
}

export default async function Home({ searchParams }: Props) {
  const params = searchParams

  return (
    <main>
      <HeroSection />
      <div className="flex flex-col gap-10 px-7 max-w-5xl mx-auto mt-10">
        <Suspense fallback={<Loading />} key={params?.filter_trendings}>
          <div>
            <ListHeader title={
              <div className="flex items-center gap-4">
                <h3>Trending</h3>
                <TrendingsFilter />
              </div>
            } href={"/movies/trending"} />
            <Trendings params={params} />
          </div>
        </Suspense>
        <Suspense fallback={<Loading />}>
          <MostPopulars />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Actions />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Adventures />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Animations />
        </Suspense>
      </div>
    </main>
  );
}
