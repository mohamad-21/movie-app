"use server"

import {
  API_RESULT,
  MovieActorsResult,
  MovieDetails,
  MovieEpisodeResult,
  MovieProps,
  PersonDetails,
  PersonLinks,
  PersonMovieCredits,
  PersonTVCredits,
  ReviewProps,
  SeriesDetails,
  SeriesProps,
  TrendingMovie
} from "@/src/types";

export async function fetchFromTMDB(url: string) {
  const resp = await fetch(`${process.env.API_URL}/3${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
  });
  if (!resp.ok) throw new Error(resp.statusText);
  const data = await resp.json();
  return data;
}

export async function getDiscoverMovies({ page, sort_by, genre }: { page?: number | string, sort_by?: string, genre?: number | string }) {
  const params = new URLSearchParams();
  params.set("adult", "false");
  params.set("include_video", "false");
  if (page) {
    params.set("page", page as unknown as string);
  }
  if (sort_by) {
    params.set("sort_by", sort_by);
  }
  if (genre) {
    params.set("with_genres", genre as unknown as string);
  }

  try {
    const data: API_RESULT<MovieProps[]> = await fetchFromTMDB(
      `/discover/movie?${params.toString()}`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getMovieById(id: number | string) {
  try {
    const data: MovieDetails = await fetchFromTMDB("/movie/" + id);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSeriesById(id: number | string) {
  try {
    const data: SeriesDetails = await fetchFromTMDB("/tv/" + id);
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getTrendingMovies({ time = "day", page }: { time?: string, page?: number | string } = {}) {
  const params = new URLSearchParams();
  params.set("adult", "false");
  if (page) {
    params.set("page", page as string);
  }

  try {
    const data: API_RESULT<TrendingMovie[]> = await fetchFromTMDB(
      `/trending/movie/${time}${params ? `?${params.toString()}` : ""}`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSeriesList({ page, sort_by }: { page?: number | string, sort_by?: string } = {}) {
  const params = new URLSearchParams();
  if (page) {
    params.set("page", page as string);
    params.set("adult", "false");
  }
  if (sort_by) {
    params.set("sort_by", sort_by);
  }

  try {
    const data: API_RESULT<SeriesProps[]> = await fetchFromTMDB(
      `/discover/tv${params ? `?${params.toString()}` : ""}`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getActionMovies() {
  try {
    const data: API_RESULT<MovieProps[]> = await fetchFromTMDB(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=28"
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getAdventureMovies() {
  try {
    const data: API_RESULT<MovieProps[]> = await fetchFromTMDB(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=12"
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getComedyMovies() {
  try {
    const data: API_RESULT<MovieProps[]> = await fetchFromTMDB(
      "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=16"
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getMovieActors(movieId: number | string) {
  try {
    const data: MovieActorsResult = await fetchFromTMDB(
      `/movie/${movieId}/credits?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSeriesActors(seriesId: number | string) {
  try {
    const data: MovieActorsResult = await fetchFromTMDB(
      `/tv/${seriesId}/credits?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getMovieEpisodes(movieId: number | string) {
  try {
    const data: MovieEpisodeResult = await fetchFromTMDB(
      `/movie/${movieId}/videos?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSeriesEpisodes(seriesId: number | string) {
  try {
    const data: MovieEpisodeResult = await fetchFromTMDB(
      `/tv/${seriesId}/videos?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSimilarMovies(movieId: number | string) {
  try {
    const data: API_RESULT<MovieProps[]> = await fetchFromTMDB(
      `/movie/${movieId}/similar?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSimilarSeries(seriesId: number | string) {
  try {
    const data: API_RESULT<SeriesProps[]> = await fetchFromTMDB(
      `/tv/${seriesId}/similar?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getMovieReviews(movieId: number | string) {
  try {
    const data: API_RESULT<ReviewProps[]> = await fetchFromTMDB(
      `/movie/${movieId}/reviews?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSeriesReviews(seriesId: number | string) {
  try {
    const data: API_RESULT<ReviewProps[]> = await fetchFromTMDB(
      `/tv/${seriesId}/reviews?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getPopularMovies() {
  try {
    const data: API_RESULT<MovieProps[]> = await fetchFromTMDB(
      `/discover/movie?sort_by=popularity.desc&include_video=false&language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getPersonDetails(personId: number | string) {
  try {
    const data: PersonDetails = await fetchFromTMDB(
      `/person/${personId}?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getPersonMovieCredits(personId: number | string) {
  try {
    const data: PersonMovieCredits = await fetchFromTMDB(
      `/person/${personId}/movie_credits?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getPersonTVCredtis(personId: number | string) {
  try {
    const data: PersonTVCredits = await fetchFromTMDB(
      `/person/${personId}/tv_credits?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getPersonSocialLinks(personId: number | string) {
  try {
    const data: PersonLinks = await fetchFromTMDB(
      `/person/${personId}/external_ids?language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

export async function getSearchResults(searchTerm: string) {
  try {
    const data: API_RESULT<any[]> = await fetchFromTMDB(
      `/search/multi?query=${searchTerm}&language=en-US`
    );
    return data;
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}