<template>
  <div v-if="!apiError">
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
            ><v-btn color="primary" class="ml-2">Купить билет</v-btn>
          </div>
          <div class="d-sm-none d-block">
            <v-btn block color="secondary" class="mt-4">Подробнее</v-btn
            ><v-btn block color="primary" class="mt-4">Купить билет</v-btn>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
  <div v-else>
    <span>Error</span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { MovieDetails } from "@/store/types";
import axios from "axios";

const props = defineProps({
  kinopoiskId: Number,
});
let apiError = ref(false);
async function movieDetals(id: number) {
  try {
    const { data } = await axios.get<MovieDetails>(
      `https://new-cinema-api.herokuapp.com/movie/${id}/`
    );
    return data;
  } catch (error) {
    apiError.value = true;
    throw new Error();
  }
}
const movie = await movieDetals(props.kinopoiskId as number);
const genres = computed((): string => {
  return movie.genres.map((item) => item.genre).join(", ");
});
const description = computed(() => {
  if (movie.description.length > 480) {
    return movie.description.substring(0, 480) + "...";
  } else {
    return movie.description;
  }
});
</script>

<style scoped></style>
