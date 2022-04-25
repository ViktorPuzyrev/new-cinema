import { createStore } from "vuex";
import * as API from "@/services/API";
import * as TYPE from "@/store/types";

export default createStore({
  state: {
    loading: true,
    NowPlayingMovies: {} as TYPE.MoviesList,
    UpcomingMovies: {} as TYPE.MoviesList,
    MovieDetals: {} as TYPE.MovieDetails,
    MovieCredits: {} as TYPE.MovieCredits,
    MovieImages: {} as TYPE.MovieImages,
    MovieVideos: {} as TYPE.MovieVideos,
  },
  getters: {
    upcomingMoviesList(state) {
      return state.UpcomingMovies.items;
    },
  },
  mutations: {
    updateLoading(state) {
      state.loading = false;
    },
    updateUpcomingMovies(state, data: TYPE.MoviesList) {
      state.UpcomingMovies = data;
    },
    updateNowPlayingMovies(state, data: TYPE.MoviesList) {
      state.NowPlayingMovies = data;
    },
    updateMovieDetals(state, data: TYPE.MovieDetails) {
      state.MovieDetals = data;
    },
    updateMovieCredits(state, data: TYPE.MovieCredits) {
      state.MovieCredits = data;
    },
    updateMovieImages(state, data: TYPE.MovieImages) {
      state.MovieImages = data;
    },
    updateMovieVideos(state, data: TYPE.MovieVideos) {
      state.MovieVideos = data;
    },
  },
  actions: {
    async initUpcomingMovies({ commit }) {
      const data = await API.getUpcomingMovies();
      commit("updateUpcomingMovies", data);
      commit("updateLoading");
    },
    async initNowPlayingMovies({ commit }) {
      const data = await API.getNowPlayingMovies();
      commit("updateNowPlayingMovies", data);
    },
    async initMovieDetals({ commit }, id: number) {
      const data = await API.getMovieDetals(id);
      commit("updateMovieDetals", data);
    },
    async initMovieCredits({ commit }, id: number) {
      const data = await API.getMovieCredits(id);
      commit("updateMovieCredits", data);
    },
    async initMovieImages({ commit }, id: number) {
      const data = await API.getMovieImages(id);
      commit("updateMovieImages", data);
    },
    async initMovieVideos({ commit }, id: number) {
      const data = await API.getMovieVideos(id);
      commit("updateMovieVideos", data);
    },
  },
  modules: {},
});
