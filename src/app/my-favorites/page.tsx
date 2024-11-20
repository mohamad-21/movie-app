import Section from "@/src/components/Section";
import Favorites from "./Favorites";

export const metadata = {
  title: "My Favorites"
}

async function FavortiesPage() {
  return (
    <Section className="pt-10">
      <Favorites />
    </Section>
  )
}

export default FavortiesPage;
