<template>
  <TheSlider />
  <v-card class="mt-4 pa-3" color="primary">
    <span class="text-h5">Уже на экранах</span>
    <Suspense>
      <template #default>
        <MovieCard
          v-for="movie of moviesPagination[0]"
          :key="movie.kinopoiskId"
          :kinopoiskId="movie.kinopoiskId"
        />
      </template>
      <template #fallback>
        <div>
          <LoadingMovieCard v-for="n of 10" :key="n" />
        </div>
      </template>
    </Suspense>
    <div class="d-flex">
      <v-btn class="text-black ma-auto">Показать еще</v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useStore } from "vuex";
import TheSlider from "@/components/TheSlider.vue";
import MovieCard from "@/components/MovieCard.vue";
import LoadingMovieCard from "@/components/LoadingMovieCard.vue";
import { computed } from "vue";
import { Movie } from "@/store/types";

const store = useStore();

const NowPlayingMovies = computed(
  (): Movie[] => store.getters.NowPlayingMoviesList
);

function chunk(arr: Movie[], size: number) {
  const result = [];
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    result.push(arr.slice(i * size, i * size + size));
  }
  return result;
}

const moviesPagination = computed(() => chunk(NowPlayingMovies.value, 10));

const initData = () => {
  store.dispatch("initUpcomingMovies");
  store.dispatch("initNowPlayingMovies");
};
initData();
</script>
