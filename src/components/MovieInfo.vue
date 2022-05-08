<template>
  <v-row>
    <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="">
      <v-img :src="movieDetails.posterUrl"></v-img
    ></v-col>
    <v-col cols="12" xs="12" sm="8" md="8" lg="" xl=""
      ><v-card
        ><v-card-title class="text-h5 pb-0">
          {{ movieDetails.nameRu }}
        </v-card-title>
        <v-card-subtitle>{{ movieDetails.nameOriginal }}</v-card-subtitle>
        <v-card-text class="pb-1 text-body-1"
          >Год: {{ movieDetails.year }}
        </v-card-text>
        <v-card-text class="pb-1 pt-0 text-body-1"
          >Страна:
          {{ movieDetails.countries.map((item) => item.country).join(", ") }}
        </v-card-text>
        <v-card-text class="pb-1 pt-0 text-body-1"
          >Жанр: {{ movieDetails.genres.map((item) => item.genre).join(", ") }}
        </v-card-text>
        <v-card-text class="pt-0 text-body-1"
          >Описание: {{ movieDetails.description }}</v-card-text
        ><v-responsive :aspect-ratio="16 / 9"
          ><iframe
            width="100%"
            height="315"
            hspace="30"
            class="px-4"
            src="https://www.youtube.com/embed/BNOtkWjZbZk"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe
        ></v-responsive>
      </v-card>
    </v-col>
    <v-col cols="12" xs="12" sm="" md="6" lg="3" xl=""
      ><v-card class="py-1"
        ><PersonCard
          v-for="person of director"
          :key="person.staffId"
          :person="person"
        />
        <PersonCard
          v-for="person of actors"
          :key="person.staffId"
          :person="person"
        /> </v-card
    ></v-col>
  </v-row>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import PersonCard from "@/components/PersonCard.vue";
import useAPI from "@/services/API";
import * as TYPE from "@/store/types";

const route = useRoute();
const movieDetails: TYPE.MovieDetails = await useAPI(
  `movie/${route.params.id}`
);
const movieCredits: TYPE.MovieCredits[] = await useAPI(
  `movie/${route.params.id}/credits`
);
const movieImages: TYPE.MovieImages = await useAPI(
  `movie/${route.params.id}/images`
);
const movieVideos: TYPE.MovieVideos = await useAPI(
  `movie/${route.params.id}/videos`
);
(() => (document.title = `${movieDetails.nameRu} - New Cinema`))();
const director = computed(() =>
  movieCredits.filter((item) => item.professionKey === "DIRECTOR")
);
const actors = computed(() =>
  movieCredits.filter((item) => item.professionKey === "ACTOR").slice(0, 5)
);
</script>

<style scoped></style>
