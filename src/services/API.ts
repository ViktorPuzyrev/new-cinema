import store from "@/store";
import * as TYPE from "@/store/types";
import axios, { AxiosError } from "axios";

export const getUpcomingMovies = async (): Promise<TYPE.MoviesList> => {
  try {
    return await axios.get("https://new-cinema-api.herokuapp.com/upcoming");
  } catch (error) {
    store.commit("updateError", (error as AxiosError).response?.data);
    throw error;
  }
};

export const getNowPlayingMovies = async (): Promise<TYPE.MoviesList> =>
  await fetch(`https://new-cinema-api.herokuapp.com/now-playing/`).then(
    (respons) => respons.json()
  );

export const getMovieDetals = async (id: number): Promise<TYPE.MovieDetails> =>
  await fetch(`https://new-cinema-api.herokuapp.com/movie/${id}/`).then(
    (respons) => respons.json()
  );

export const getMovieCredits = async (id: number): Promise<TYPE.MovieCredits> =>
  await fetch(`https://new-cinema-api.herokuapp.com/movie/${id}/credits/`).then(
    (respons) => respons.json()
  );

export const getMovieImages = async (id: number): Promise<TYPE.MovieImages> =>
  await fetch(`https://new-cinema-api.herokuapp.com/movie/${id}/images/`).then(
    (respons) => respons.json()
  );

export const getMovieVideos = async (id: number): Promise<TYPE.MovieVideos> =>
  await fetch(`https://new-cinema-api.herokuapp.com/movie/${id}/videos/`).then(
    (respons) => respons.json()
  );
