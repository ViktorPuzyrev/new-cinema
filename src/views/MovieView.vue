<template>
  <ApiAlert />
  <Suspense>
    <template #default
      ><v-row>
        <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3">
          <MoviePoster />
          <MovieCredits class="mt-4 d-none d-md-block d-lg-none" />
        </v-col>
        <v-col cols="12" xs="12" sm="8" md="8" lg="6" xl="7"
          ><MovieInfo class="" />
          <MovieYouTubeTrailer class="mt-4 mb-4 d-none d-md-block" />
          <MovieImages class="d-none d-md-block" />
        </v-col>
        <v-col cols="12" xs="12" md="6" lg="3" xl="2"
          ><MovieYouTubeTrailer class="mb-4 d-sm-block d-md-none" />
          <MovieImages class="mb-4 d-sm-block d-md-none" />
          <MovieCredits class="d-md-none d-lg-block"
        /></v-col>
      </v-row>
    </template>
    <template #fallback><MovieFallbackLoading /></template>
  </Suspense>
</template>

<script setup lang="ts">
import ApiAlert from "@/components/ApiAlert.vue";
import MovieInfo from "@/components/MovieInfo.vue";
import MoviePoster from "@/components/MoviePoster.vue";
import MovieYouTubeTrailer from "@/components/MovieYouTubeTrailer.vue";
import MovieCredits from "@/components/MovieCredits.vue";
import MovieImages from "@/components/MovieImages.vue";
import MovieFallbackLoading from "@/components/MovieFallbackLoading.vue";
</script>

<style scoped></style>
