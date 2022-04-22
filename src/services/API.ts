import * as TYPE from "@/store/types";

export const getUpcomingMovies = async (
  lang: string
): Promise<TYPE.MovieList> =>
  await fetch(`https://new-cinema-api.herokuapp.com/upcoming/${lang}`).then(
    (respons) => respons.json()
  );

export const getNowPlayingMovies = async (
  lang: string
): Promise<TYPE.MovieList> =>
  await fetch(`https://new-cinema-api.herokuapp.com/now-playing/${lang}`).then(
    (respons) => respons.json()
  );

export const getMovieDetals = async (
  id: number,
  lang: string
): Promise<TYPE.MovieList> =>
  await fetch(`https://new-cinema-api.herokuapp.com/movie/${id}/${lang}`).then(
    (respons) => respons.json()
  );

export const getMovieCredits = async (
  id: number,
  lang: string
): Promise<TYPE.MovieCredits> =>
  await fetch(
    `https://new-cinema-api.herokuapp.com/movie/${id}/credits/${lang}`
  ).then((respons) => respons.json());

export const getMovieImages = async (
  id: number,
  lang: string
): Promise<TYPE.MovieImages> =>
  await fetch(
    `https://new-cinema-api.herokuapp.com/movie/${id}/images/${lang}`
  ).then((respons) => respons.json());

export const getMovieVideos = async (
  id: number,
  lang: string
): Promise<TYPE.MovieVideos> =>
  await fetch(
    `https://new-cinema-api.herokuapp.com/movie/${id}/videos/${lang}`
  ).then((respons) => respons.json());
