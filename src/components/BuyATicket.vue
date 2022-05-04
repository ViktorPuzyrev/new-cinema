<template>
  <v-card class="" width="300">
    <v-combobox
      v-model="tickets.session"
      :items="session"
      label="Сеанс"
    ></v-combobox>
    <v-combobox
      v-model="tickets.seats"
      :items="seats"
      label="Места"
      multiple
      chips
    ></v-combobox>
    <v-btn block color="success" @click="addToCart">Buy a ticket</v-btn>
  </v-card>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useStore } from "vuex";

const props = defineProps({
  kinopoiskId: { type: Number, required: true },
});

const emit = defineEmits(["closeModal"]);

const store = useStore();
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
  session: [],
  seats: [],
});
function addToCart() {
  if (tickets.session.length && tickets.seats.length) {
    store.commit("addToCart", tickets);
  }
  emit("closeModal");
}
</script>

<style scoped></style>
