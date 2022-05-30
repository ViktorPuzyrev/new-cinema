import { createStore } from "vuex";
import useAPI from "@/services/API";
import * as TYPE from "@/store/types";

export default createStore({
  state: {
    error: "",
    loading: true,
    cart: [] as TYPE.CartItem[],
    nowPlayingMovies: {} as TYPE.MoviesList,
    upcomingMovies: {} as TYPE.MoviesList,
  },
  getters: {
    upcomingMoviesList(state) {
      return state.upcomingMovies.items;
    },
    nowPlayingMoviesList(state) {
      return state.nowPlayingMovies.items;
    },
    cartItemsCount(state) {
      return state.cart.length;
    },
    cartTotalCoast(state) {
      return state.cart.reduce((sum, ticket) => sum + ticket.total, 0);
    },
    movieById: (state) => (id: number) => {
      return state.nowPlayingMovies.items.find(
        (item) => item.kinopoiskId === id
      );
    },
  },
  mutations: {
    updateError(state, data: string) {
      state.error = data;
    },
    updateLoading(state) {
      state.loading = false;
    },
    addToCart(state, data) {
      state.cart.push(data);
    },
    removeFromCart(state, id) {
      state.cart.splice(id, 1);
    },
    updateUpcomingMovies(state, data: TYPE.MoviesList) {
      state.upcomingMovies = data;
    },
    updateNowPlayingMovies(state, data: TYPE.MoviesList) {
      state.nowPlayingMovies = data;
    },
  },
  actions: {
    async initUpcomingMovies({ commit }) {
      const data = await useAPI("upcoming");
      commit("updateUpcomingMovies", data);
      commit("updateLoading");
    },
    async initNowPlayingMovies({ commit }) {
      const data = await useAPI("now-playing");
      commit("updateNowPlayingMovies", data);
    },
  },
  modules: {},
});
