import { getPersonDetails, getPersonMovieCredits, getPersonSocialLinks, getPersonTVCredtis } from "@/src/lib/actions";
import { notFound } from "next/navigation";
import MoviesList from "@/src/components/movies/MoviesList";
import PersonBiography from "./PersonBiography";
import { InfoItem } from "./PersonInfo";
import { IconBrandX } from '@tabler/icons-react';
import { IconBrandFacebook } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';

async function PersonDetails({ personId }: { personId: number | string }) {
  const person = await getPersonDetails(personId);
  const movieCredits = await getPersonMovieCredits(personId);
  const tvCredits = await getPersonTVCredtis(personId);
  const socialLinks = await getPersonSocialLinks(personId);
  const havesSocialLink = socialLinks?.facebook_id || socialLinks?.instagram_id || socialLinks?.twitter_id;
  if (!person) notFound();

  return (
    <div className="grid gap-12 px-7 max-w-5xl mx-auto">
      <div className="flex items-start md:flex-row flex-col gap-6">
        <div className="flex-1 items-start flex md:flex-col max-md:w-full flex-row max-md:justify-between gap-6 max-[500px]:!flex-col lg:sticky top-16 left-0 bottom-0">
          <img
            src={`${process.env.API_IMAGE_BASEPATH}/w500/${person.profile_path}`}
            className="max-md:max-w-[200px]"
            alt={person.name}
          />
        </div>
        <div className="grid gap-6 flex-[1.7]">
          <div className="grid gap-4">
            <h2 className="sm:text-4xl text-3xl font-bold">{person.name}</h2>
            <div className="grid gap-4">
              {person.biography && <InfoItem title="Biography" value={<PersonBiography bio={person.biography} />} />}
              <InfoItem title="Date of birth" value={person.birthday || "Unknown"} />
              <InfoItem title="Place of birth" value={person.place_of_birth || "Unknown"} />
              {person.deathday && (
                <InfoItem title="Death day" value={person.deathday} />
              )}
              <InfoItem title="Gender" value={person.gender === 2 ? "Male" : "Female"} />
              <InfoItem title="Known as" value={person.also_known_as.length > 0 ? person.also_known_as.map(name => <span className="block" key={name}>{name}</span>) : "Unknown"} />
              {havesSocialLink && (
                <InfoItem title="Social Links" value={
                  <div className="flex items-center gap-4 flex-wrap">
                    {socialLinks.facebook_id && <a target="_blank" href={`https://facebook.com/${socialLinks.facebook_id}`} className="p-2 border-2 border-zinc-700 hover:bg-zinc-700 rounded-full text-white"><IconBrandFacebook /></a>}
                    {socialLinks.twitter_id && <a target="_blank" href={`https://x.com/${socialLinks.twitter_id}`} className="p-2 border-2 border-zinc-700 hover:bg-zinc-700 rounded-full text-white"><IconBrandX /></a>}
                    {socialLinks.instagram_id && <a target="_blank" href={`https://instagram.com/${socialLinks.instagram_id}`} className="p-2 border-2 border-zinc-700 hover:bg-zinc-700 rounded-full text-white"><IconBrandInstagram /></a>}
                  </div>
                } />
              )}
            </div>
          </div>
        </div>
      </div>
      {(movieCredits && movieCredits?.cast.length > 0) && (
        <div className="!overflow-hidden">
          <h3 className="sm:text-2xl text-xl font-bold mb-4">Movies</h3>
          <MoviesList movies={movieCredits.cast.map(cast => {
            return {
              poster_path: cast.poster_path,
              title: cast.original_title,
              id: cast.id,
            }
          })} onlyImage={false} />
        </div>
      )}
      {(tvCredits && tvCredits?.cast.length > 0) && (
        <div className="!overflow-hidden">
          <h3 className="sm:text-2xl text-xl font-bold mb-4">Series</h3>
          <MoviesList movies={tvCredits.cast.map(cast => {
            return {
              poster_path: cast.poster_path,
              title: cast.name,
              id: cast.id,
            }
          })} type="series" onlyImage={false} />
        </div>
      )}
    </div>
  );
}

export default PersonDetails;
