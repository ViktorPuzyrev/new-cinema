<template>
  <TheSlider />
  <v-card class="mt-4 pa-3" color="primary">
    <span class="text-h5">Уже на экранах</span>
    <Suspense v-for="movie of movieList" :key="movie.kinopoiskId">
      <template #default>
        <MovieCard :kinopoiskId="movie.kinopoiskId" />
      </template>
      <template #fallback>
        <div>
          <LoadingMovieCard />
        </div>
      </template>
    </Suspense>
    <div class="d-flex">
      <v-btn class="text-black ma-auto" @click="addToMovieList"
        >Показать еще</v-btn
      >
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from "vue";
import { useStore } from "vuex";
import TheSlider from "@/components/TheSlider.vue";
import MovieCard from "@/components/MovieCard.vue";
import LoadingMovieCard from "@/components/LoadingMovieCard.vue";
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
function addToMovieList() {
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
