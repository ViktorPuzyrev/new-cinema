<template>
  <div>Movie Info</div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useAPI from "@/services/API";
import * as TYPE from "@/store/types";

const route = useRoute();
const movieDetails: TYPE.MovieDetails = await useAPI(
  `movie/${route.params.id}`
);
const movieCredits: TYPE.MovieCredits = await useAPI(
  `movie/${route.params.id}/credits`
);
const movieImages: TYPE.MovieImages = await useAPI(
  `movie/${route.params.id}/images`
);
const movieVideos: TYPE.MovieVideos = await useAPI(
  `movie/${route.params.id}/videos`
);
(() => (document.title = `${movieDetails.nameRu} - New Cinema`))();
</script>

<style scoped></style>
