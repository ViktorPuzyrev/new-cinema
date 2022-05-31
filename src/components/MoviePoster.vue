<template>
  <v-card
    ><v-img :src="posterUrl" :lazy-src="posterUrlPreview" cover></v-img>
    <div class="d-flex justify-center">
      <BuyATicket :kinopoiskId="kinopoiskId" />
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import BuyATicket from "@/components/BuyATicket.vue";
import useAPI from "@/services/API";
import { MovieDetails } from "@/store/types";

const route = useRoute();
const { posterUrl, posterUrlPreview, kinopoiskId }: MovieDetails = await useAPI(
  `movie/${route.params.id}`
);
</script>

<style scoped></style>
