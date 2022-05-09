<template>
  <v-card class="pa-3 mb-3">
    <v-row no-gutter class="d-flex" cols="12">
      <v-col xs="12" sm="4" md="4" lg="2" xl="1" class="d-flex">
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
          <v-btn
            color="cyan"
            :to="{
              name: 'movie',
              params: { id: movie.kinopoiskId },
            }"
            >Подробнее</v-btn
          ><v-btn color="amber" class="ml-2" @click="overlay = true"
            >Купить билет</v-btn
          >
        </div>
        <div class="d-sm-none d-block">
          <v-btn
            block
            color="cyan"
            class="mt-4"
            :to="{
              name: 'movie',
              params: { id: movie.kinopoiskId },
            }"
          >
            Подробнее</v-btn
          ><v-btn block color="amber" class="mt-4" @click="overlay = true"
            >Купить билет</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-card>
  <v-overlay v-model="overlay" class="align-center justify-center">
    <BuyATicket
      :kinopoiskId="kinopoiskId"
      @closeModal="overlay = false"
      @showSnackbar="snackbar = true"
    />
  </v-overlay>
  <v-snackbar v-model="snackbar">
    Добавлено в корзину
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import BuyATicket from "@/components/BuyATicket.vue";
import useAPI from "@/services/API";
import { MovieDetails } from "@/store/types";

const props = defineProps({
  kinopoiskId: { type: Number, required: true },
});
const overlay = ref(false);
const snackbar = ref(false);

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
