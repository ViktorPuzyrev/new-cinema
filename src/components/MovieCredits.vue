<template>
  <v-card class="py-3 px-2"
    ><MovieCreditsPersonCard
      v-for="person of director"
      :key="person.staffId"
      :person="person"
    />
    <MovieCreditsPersonCard
      v-for="person of actors"
      :key="person.staffId"
      :person="person"
    />
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import MovieCreditsPersonCard from "@/components/MovieCreditsPersonCard.vue";
import useAPI from "@/services/API";
import { MovieCredits } from "@/store/types";

const route = useRoute();

const movieCredits: MovieCredits[] = await useAPI(
  `movie/${route.params.id}/credits`
);

const director = computed(() =>
  movieCredits.filter((person) => person.professionKey === "DIRECTOR")
);
const numberOfActors = 6;
const actors = computed(() =>
  movieCredits
    .filter((person) => person.professionKey === "ACTOR")
    .slice(0, numberOfActors)
);
</script>

<style scoped></style>
