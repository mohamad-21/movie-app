import Section from "@/src/components/Section";
import Watchlist from "./Watchlist";

export const metadata = {
  title: "My Watchlist"
}

async function WatchlistPage() {
  return (
    <Section className="pt-10">
      <Watchlist />
    </Section>
  )
}

export default WatchlistPage;
