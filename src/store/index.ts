import { createStore } from "vuex";
import * as API from "@/services/API";
import * as TYPE from "@/store/types";

export default createStore({
  state: {
    breakpoint: "",
    language: "ru",
    NowPlayingMovies: {} as TYPE.MovieList,
    UpcomingMovies: {} as TYPE.MovieList,
    MovieDetals: {} as TYPE.MovieDetals,
    MovieCredits: {} as TYPE.MovieCredits,
    MovieImages: {} as TYPE.MovieImages,
    MovieVideos: {} as TYPE.MovieVideos,
  },
  getters: {
    upcomingMoviesList(state) {
      const data: TYPE.Movie[] = JSON.parse(
        JSON.stringify(state.UpcomingMovies.results)
      );
      data.forEach((item) => {
        item.backdrop_path = API.getImageUrl(
          "backdrop",
          state.breakpoint,
          item.backdrop_path
        );
        item.poster_path = API.getImageUrl(
          "poster",
          state.breakpoint,
          item.poster_path
        );
      });
      return data;
    },
  },
  mutations: {
    updateUpcomingMovies(state, data: TYPE.MovieList) {
      state.UpcomingMovies = data;
    },
    updateNowPlayingMovies(state, data: TYPE.MovieList) {
      state.NowPlayingMovies = data;
    },
    updateMovieDetals(state, data: TYPE.MovieList) {
      state.MovieDetals = data;
    },
    updateMovieCredits(state, data: TYPE.MovieDetals) {
      state.MovieCredits = data;
    },
    updateMovieImages(state, data: TYPE.MovieImages) {
      state.MovieImages = data;
    },
    updateMovieVideos(state, data: TYPE.MovieVideos) {
      state.MovieVideos = data;
    },
    updateBreakpoint(state, data: string) {
      state.breakpoint = data;
    },
  },
  actions: {
    async initUpcomingMovies({ state, commit }) {
      const data = await API.getUpcomingMovies(state.language);
      commit("updateUpcomingMovies", data);
    },
    async initNowPlayingMovies({ state, commit }) {
      const data = await API.getNowPlayingMovies(state.language);
      commit("updateNowPlayingMovies", data);
    },
    async initMovieDetals({ state, commit }, id: number) {
      const data = await API.getMovieDetals(id, state.language);
      commit("updateMovieDetals", data);
    },
    async initMovieCredits({ state, commit }, id: number) {
      const data = await API.getMovieCredits(id, state.language);
      commit("updateMovieCredits", data);
    },
    async initMovieImages({ state, commit }, id: number) {
      const data = await API.getMovieImages(id, state.language);
      commit("updateMovieImages", data);
    },
    async initMovieVideos({ state, commit }, id: number) {
      const data = await API.getMovieVideos(id, state.language);
      commit("updateMovieVideos", data);
    },
  },
  modules: {},
});
