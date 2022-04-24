<template>
  <div v-if="loading">
    <span>Loading...</span>
  </div>
  <div v-else>
    <v-carousel cycle height="100%" hide-delimiters show-arrows="hover">
      <v-carousel-item v-for="movie in UpcomingMovies" :key="movie.id" eager>
        <v-img :src="movie.backdrop_path" contain eager></v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { Movie } from "@/store/types";

const store = useStore();
const loading = computed((): boolean => store.state.loading);
const UpcomingMovies = computed(
  (): Movie[] => store.getters.upcomingMoviesList
);
</script>

<style scoped></style>
