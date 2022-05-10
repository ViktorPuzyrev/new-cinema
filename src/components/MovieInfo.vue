<template>
  <v-card
    ><v-card-title class="text-h5 pb-0">
      {{ movieDetails.nameRu }}
    </v-card-title>
    <v-card-subtitle>{{ movieDetails.nameOriginal }}</v-card-subtitle>
    <v-card-text class="pb-1 text-body-1"
      >Год: {{ movieDetails.year }}
    </v-card-text>
    <v-card-text class="pb-1 pt-0 text-body-1"
      >Страна:
      {{ movieDetails.countries.map((movie) => movie.country).join(", ") }}
    </v-card-text>
    <v-card-text class="pb-1 pt-0 text-body-1"
      >Жанр:
      {{ movieDetails.genres.map((movie) => movie.genre).join(", ") }}
    </v-card-text>
    <v-card-text class="pt-0 text-body-1"
      >Описание: {{ movieDetails.description }}</v-card-text
    >
  </v-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useAPI from "@/services/API";
import { MovieDetails } from "@/store/types";

const route = useRoute();
const movieDetails: MovieDetails = await useAPI(`movie/${route.params.id}`);

(() => (document.title = `${movieDetails.nameRu} - New Cinema`))();
</script>

<style scoped></style>
