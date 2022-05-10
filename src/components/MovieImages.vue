<template>
  <v-card class="pa-4"
    ><v-carousel hide-delimiters show-arrows-on-hover height="100%">
      <v-carousel-item v-for="(slide, i) in movieImages.items" :key="i" eager>
        <v-img
          :src="slide.imageUrl"
          :lazy-src="slide.previewUrl"
          contain
          eager
        ></v-img>
      </v-carousel-item> </v-carousel
  ></v-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useAPI from "@/services/API";
import { MovieImages } from "@/store/types";

const route = useRoute();
const movieImages: MovieImages = await useAPI(
  `movie/${route.params.id}/images`
);
</script>

<style scoped></style>
