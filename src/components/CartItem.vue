<template>
  <v-card class="mb-4 pa-3">
    <v-row no-gutter class="d-flex">
      <v-col cols="12" xs="12" sm="2" md="2" lg="1" class="d-flex">
        <v-img :src="movie.posterUrl" height="100%" width="600"></v-img>
      </v-col>
      <v-col cols="12" xs="12" sm="7" md="8" lg="9">
        <span class="text-h5">{{ movie.nameRu }}</span
        ><br />
        <span><b>Сеанс:</b> {{ item.session }}</span
        ><br />
        <span><b>Места:</b> {{ item.seats.join(", ") }}</span
        ><br />
        <span><b>Стоимость:</b> {{ item.total }}</span
        ><br />
      </v-col>
      <v-col cols="12" xs="12" sm="3" md="2" lg="2" align-self="center">
        <div class="d-none d-sm-flex justify-end">
          <v-btn color="red" @click="removeFromCart">Удалить</v-btn>
        </div>
        <div class="d-sm-none d-block">
          <v-btn block color="red" @click="removeFromCart">Удалить</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { useStore } from "vuex";
import * as TYPE from "@/store/types";

const props = defineProps({
  item: { type: Object as PropType<TYPE.CartItem>, required: true },
  index: { type: Number, required: true },
});

const store = useStore();
const movie = computed<TYPE.Movie>(() =>
  store.getters.movieById(props.item.movieId)
);
function removeFromCart() {
  store.commit("removeFromCart", props.index);
}
</script>

<style scoped></style>
