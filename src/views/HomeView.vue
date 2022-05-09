<template>
  <v-alert v-if="store.state.error" type="error" class="mb-4"
    >Ошибка API. {{ store.state.error }}</v-alert
  >
  <TheSlider />
  <v-card class="mt-4 pa-3" color="grey">
    <span class="text-h5 text-white">Уже на экранах</span>
    <div v-if="store.state.error || store.state.loading">
      <HomeMovieCardLoading v-for="n of 5" :key="n" />
    </div>
    <Suspense v-for="movie of movieList" :key="movie.kinopoiskId">
      <template #default>
        <HomeMovieCard :kinopoiskId="movie.kinopoiskId" />
      </template>
      <template #fallback>
        <HomeMovieCardLoading />
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
import TheSlider from "@/components/TheSlider.vue";
import HomeMovieCard from "@/components/HomeMovieCard.vue";
import HomeMovieCardLoading from "@/components/HomeMovieCardLoading.vue";
import { Movie } from "@/store/types";

const movieList: Movie[] = reactive([]);

const store = useStore();
const NowPlayingMovies = computed(
  (): Movie[] => store.getters.NowPlayingMoviesList
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
