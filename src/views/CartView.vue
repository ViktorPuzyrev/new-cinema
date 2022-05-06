<template>
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
      />
    </div>
    <div class="d-flex justify-end">
      <v-btn v-if="!emptyCart">Оплатить {{ cartItemsCost }}</v-btn>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import CartItem from "@/components/CartItem.vue";
import * as TYPE from "@/store/types";

const store = useStore();
const emptyCart = computed(() => !store.getters.cartItemsCount);
const cartItems = computed<TYPE.CartItem[]>(() => store.state.cart);
const cartItemsCost = computed<number>(() => store.getters.cartTotalCoast);
</script>

<style scoped></style>
