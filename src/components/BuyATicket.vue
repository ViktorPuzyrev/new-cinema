<template>
  <div v-if="isActive">
    <div class="d-none d-sm-flex ma-2">
      <v-btn color="amber" @click="overlay = true">Купить билет</v-btn>
    </div>
    <div class="d-sm-none d-block ma-2">
      <v-btn block color="amber" class="" @click="overlay = true"
        >Купить билет</v-btn
      >
    </div>
  </div>
  <v-overlay v-model="overlay" class="align-center justify-center">
    <v-card class="d-flex flex-column" width="300">
      <v-combobox
        v-model="tickets.session"
        :items="session"
        label="Сеанс"
        hide-details
      ></v-combobox>
      <v-combobox
        v-model="tickets.seats"
        :items="seats"
        label="Места"
        hide-details
        multiple
        chips
      ></v-combobox>
      <span class="mx-auto my-2">Стоимость: {{ totalCoast }}</span>
      <v-btn color="success" @click="addToCart">Добавить в корзину</v-btn>
    </v-card>
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
import { reactive, computed, ref } from "vue";
import { useStore } from "vuex";
import { Movie } from "@/store/types";

const props = defineProps({
  kinopoiskId: { type: Number, required: true },
});

const overlay = ref(false);
const snackbar = ref(false);

const store = useStore();
const isActive = computed(() => {
  const activeMovies = computed(
    (): Movie[] => store.getters.nowPlayingMoviesList
  );
  return activeMovies.value.find(
    (movie) => movie.kinopoiskId === props.kinopoiskId
  )
    ? true
    : false;
});

const session = [
  "8:00",
  "10:00",
  "12:00",
  "14:00",
  "16:00",
  "18:00",
  "20:00",
  "22:00",
];
const seats = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
];
const tickets = reactive({
  movieId: props.kinopoiskId,
  session: "",
  seats: [],
  total: 0,
});

const totalCoast = computed(() => {
  switch (tickets.session) {
    case "8:00":
    case "10:00":
    case "12:00":
    case "14:00":
      return tickets.seats.length * 200;
    case "16:00":
    case "18:00":
      return tickets.seats.length * 300;
    default:
      return tickets.seats.length * 250;
  }
});

function addToCart() {
  if (tickets.session.length && tickets.seats.length) {
    tickets.total = totalCoast.value;
    const ticketsToCart = JSON.parse(JSON.stringify(tickets));
    store.commit("addToCart", ticketsToCart);
    overlay.value = false;
    snackbar.value = true;
    tickets.session = "";
    tickets.seats = [];
  }
}
</script>

<style scoped></style>
