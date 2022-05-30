<template>
  <ApiAlert />
  <TheSlider />
  <v-card class="mt-4 pa-3" color="blue-grey">
    <span class="text-h5 text-white">Уже на экранах</span>
    <div v-if="store.state.error || store.state.loading">
      <MovieLoading
        v-for="n of 5"
        :key="n"
        class="pa-3 mb-3 d-flex"
        color=""
        height="260"
      />
    </div>
    <Suspense v-for="movie of movieList" :key="movie.kinopoiskId">
      <template #default>
        <HomeMovieCard :kinopoiskId="movie.kinopoiskId" />
      </template>
      <template #fallback>
        <MovieLoading class="pa-3 mb-3 d-flex" color="" height="260" />
      </template>
    </Suspense>
    <div class="d-flex">
      <v-btn class="text-black ma-auto" @click="loadMore">Показать еще</v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { useStore } from "vuex";
import ApiAlert from "@/components/ApiAlert.vue";
import TheSlider from "@/components/TheSlider.vue";
import HomeMovieCard from "@/components/HomeMovieCard.vue";
import MovieLoading from "@/components/MovieLoading.vue";
import { Movie } from "@/store/types";

const movieList: Movie[] = reactive([]);

const store = useStore();
const NowPlayingMovies = computed(
  (): Movie[] => store.getters.nowPlayingMoviesList
);
watch(
  () => NowPlayingMovies.value,
  () => movieList.push(...NowPlayingMovies.value.slice(0, 5))
);
function loadMore() {
  movieList.push(
    ...NowPlayingMovies.value.slice(movieList.length, movieList.length + 5)
  );
}

const initData = () => {
  store.dispatch("initUpcomingMovies");
  store.dispatch("initNowPlayingMovies");
};
initData();
</script>
