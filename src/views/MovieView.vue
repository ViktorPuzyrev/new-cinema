<template>
  <Suspense>
    <v-row>
      <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="">
        <MoviePoster
      /></v-col>
      <v-col cols="12" xs="12" sm="8" md="8" lg="" xl=""
        ><MovieInfo class="mb-4" />
        <MovieYouTubeTrailer />
      </v-col>
      <v-col cols="12" xs="12" sm="" md="6" lg="3" xl=""
        ><MovieCredits
      /></v-col> </v-row
  ></Suspense>
</template>

<script setup lang="ts">
import MovieInfo from "@/components/MovieInfo.vue";
import MoviePoster from "@/components/MoviePoster.vue";
import MovieYouTubeTrailer from "@/components/MovieYouTubeTrailer.vue";
import MovieCredits from "@/components/MovieCredits.vue";
</script>

<style scoped></style>
