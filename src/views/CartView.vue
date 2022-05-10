<template>
  <ApiAlert />
  <v-card class="pa-3" color="blue-grey">
    <span class="text-h5 text-white">Мои билеты</span>
    <div v-if="emptyCart">
      <v-card><v-card-title>Козина пуста</v-card-title></v-card>
    </div>
    <div v-else>
      <CartItem
        v-for="(item, index) of cartItems"
        :item="item"
        :index="index"
        :key="item.movieId"
        @showSnackbar="snackbar = true"
      />
    </div>
    <div class="d-flex justify-end">
      <v-btn v-if="!emptyCart">Оплатить {{ cartItemsCost }}</v-btn>
    </div>
  </v-card>
  <v-snackbar v-model="snackbar">
    Удалено из корзины
    <template v-slot:actions>
      <v-btn color="red" variant="text" @click="snackbar = false">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useStore } from "vuex";
import ApiAlert from "@/components/ApiAlert.vue";
import CartItem from "@/components/CartItem.vue";
import * as TYPE from "@/store/types";

const snackbar = ref(false);
const store = useStore();
const emptyCart = computed(() => !store.getters.cartItemsCount);
const cartItems = computed<TYPE.CartItem[]>(() => store.state.cart);
const cartItemsCost = computed<number>(() => store.getters.cartTotalCoast);
</script>

<style scoped></style>
