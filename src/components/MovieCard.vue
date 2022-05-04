<template>
  <v-card class="pa-3 mb-3">
    <v-row no-gutter class="d-flex" cols="12">
      <v-col xs="12" sm="4" md="4" lg="2" class="d-flex">
        <v-img :src="movie.posterUrl" height="100%" width="600"></v-img>
      </v-col>
      <v-col>
        <span class="text-h5">{{ movie.nameRu }}</span
        ><br />
        <span><b>Год:</b> {{ movie.year }}</span
        ><br />
        <span><b>Жанр:</b> {{ genres }}</span
        ><br />
        <span><b>Описание:</b> {{ description }}</span
        ><br />
        <div class="d-none d-sm-flex">
          <v-btn color="secondary">Подробнее</v-btn
          ><v-btn color="primary" class="ml-2" @click="overlay = true"
            >Купить билет</v-btn
          >
        </div>
        <div class="d-sm-none d-block">
          <v-btn block color="secondary" class="mt-4">Подробнее</v-btn
          ><v-btn block color="primary" class="mt-4" @click="overlay = true"
            >Купить билет</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-card>
  <v-overlay v-model="overlay" class="align-center justify-center">
    <BuyATicket :kinopoiskId="kinopoiskId" @closeModal="overlay = false" />
  </v-overlay>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import BuyATicket from "@/components/BuyATicket.vue";
import { MovieDetails } from "@/store/types";
import useAPI from "@/services/API";

const props = defineProps({
  kinopoiskId: { type: Number, required: true },
});
let overlay = ref(false);

const movie: MovieDetails = await useAPI(`movie/${props.kinopoiskId}`);
const genres = computed((): string => {
  return movie.genres.map((item) => item.genre).join(", ");
});
const description = computed(() => {
  if (movie.description === null) {
    return "Описание отсутствует.";
  } else if (movie.description.length > 480) {
    return movie.description.substring(0, 480) + "...";
  } else {
    return movie.description;
  }
});
</script>

<style scoped></style>
