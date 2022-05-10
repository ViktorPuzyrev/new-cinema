<template>
  <v-alert v-if="store.state.error" type="error" class="mb-4"
    >Ошибка API. {{ store.state.error }}</v-alert
  >
</template>

<script setup lang="ts">
import { useStore } from "vuex";

const store = useStore();
</script>

<style scoped></style>
