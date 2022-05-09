<template>
  <v-card class="pa-4">
    <div v-if="trailer">
      <v-responsive :aspect-ratio="16 / 9">
        <iframe
          width="100%"
          height="100%"
          :src="youTubeUrl"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </v-responsive>
    </div>
    <div v-else>
      <v-responsive :aspect-ratio="16 / 9">
        <v-card width="100%" height="100%" color="black" class="d-flex">
          <span class="ma-auto text-h4 text-white">Нет трейлера</span>
        </v-card></v-responsive
      >
    </div></v-card
  >
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import useAPI from "@/services/API";
import { MovieVideos } from "@/store/types";

const route = useRoute();
const movieVideos: MovieVideos = await useAPI(
  `movie/${route.params.id}/videos`
);
const trailer = computed(
  () =>
    movieVideos?.items.filter(
      (video) =>
        video.name.toLowerCase().includes("трейлер") && video.site === "YOUTUBE"
    )[0]
);
const youTubeUrl = computed(() => {
  const youtubeEmbedTemplate = "https://www.youtube.com/embed/";
  const url = trailer.value.url.split(
    /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/
  );
  const YId =
    undefined !== url[2] ? url[2].split(/[^0-9a-z_/\\-]/i)[0] : url[0];
  return youtubeEmbedTemplate.concat(YId);
});
</script>

<style scoped></style>
