import Loading from "@/src/components/Loading";
import PersonDetails from "@/src/components/persons/PersonDetails";
import Section from "@/src/components/Section";
import { getPersonDetails } from "@/src/lib/actions";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = {
  params: { personId: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { personId } = params;
  const person = await getPersonDetails(personId);

  if (!person)
    return {
      title: "Person",
    };

  return {
    title: person.name,
  };
}

async function PersonPage({ params }: Props) {
  const { personId } = await params;

  return (
    <Section className="pt-10">
      <Suspense fallback={<Loading />}>
        <PersonDetails personId={personId} />
      </Suspense>
    </Section>
  );
}

export default PersonPage;
