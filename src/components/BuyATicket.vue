<template>
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
</template>

<script setup lang="ts">
import { reactive, computed } from "vue";
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
    store.commit("addToCart", tickets);
  }
  emit("closeModal");
}
</script>

<style scoped></style>
