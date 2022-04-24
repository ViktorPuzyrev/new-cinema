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

export function getImageUrl(
  type: string,
  breakpoint: string,
  url_path: string
): string {
  const base_url = "https://image.tmdb.org/t/p/";
  if (type === "backdrop") {
    switch (breakpoint) {
      case "xs" || "sm":
        return base_url + "w780" + url_path;
      case "md":
        return base_url + "w1280" + url_path;
      case "lg" || "xl" || "xxl":
        return base_url + "original" + url_path;
      default:
        break;
    }
  }
  if (type === "poster") {
    switch (breakpoint) {
      case "xs" || "sm":
        return base_url + "w154" + url_path;
      case "md":
        return base_url + "w185" + url_path;
      case "lg" || "xl" || "xxl":
        return base_url + "w342" + url_path;
      default:
        break;
    }
  }
  return "error";
}
