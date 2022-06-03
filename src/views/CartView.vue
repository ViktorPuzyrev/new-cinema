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
        @showSnackbar="removeCartItemSnackbar"
      />
    </div>
    <div class="d-flex justify-end">
      <v-btn v-if="!emptyCart" @click="overlay = true"
        >Оплатить {{ cartItemsCost }}</v-btn
      >
    </div>
  </v-card>
  <v-overlay v-model="overlay" class="align-center justify-center">
    <v-card width="300">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class="d-flex flex-column"
      >
        <v-text-field
          v-model="cardNumber"
          label="Номер карты"
          :rules="[rules.required, rules.cardNumber]"
        ></v-text-field>
        <v-text-field
          v-model="dateExpiration"
          label="Срок действия"
          :rules="[rules.required, rules.cardDate]"
        ></v-text-field
        ><v-text-field
          v-model="cardHolder"
          label="Имя владельца"
          :rules="[rules.required, rules.cardHolder]"
        ></v-text-field
        ><v-btn
          color="success"
          :disabled="!valid"
          class="ma-auto"
          @click="formSubmit"
        >
          Оплатить
        </v-btn>
      </v-form></v-card
    >
  </v-overlay>
  <v-snackbar v-model="snackbar">
    {{ message }}
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

const store = useStore();
const emptyCart = computed(() => !store.getters.cartItemsCount);
const cartItems = computed<TYPE.CartItem[]>(() => store.state.cart);
const cartItemsCost = computed<number>(() => store.getters.cartTotalCoast);

const overlay = ref(false);
const snackbar = ref(false);
const message = ref("");

const valid = ref(false);
const cardNumber = ref<string>();
const dateExpiration = ref<string>();
const cardHolder = ref<string>();
const rules = {
  required: (value: string) => !!value || "Необходимо заполнить",
  cardNumber: (value: string) => {
    const pattern =
      /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return pattern.test(value) || "Неправильный номер карты";
  },
  cardDate: (value: string) => {
    const pattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    return pattern.test(value) || "Неправильный срок действия карты";
  },
  cardHolder: (value: string) => {
    const pattern = /^((?:[A-Za-z]+ ?){1,3})$/;
    return pattern.test(value) || "Неправильное имя владельца карты";
  },
};

function removeCartItemSnackbar() {
  message.value = "Удалено из корзины";
  snackbar.value = true;
}

function formSubmit() {
  store.commit("removeAllFromCart");
  overlay.value = false;
  message.value = "Спасибо за покупку!";
  snackbar.value = true;
}
</script>

<style scoped></style>
