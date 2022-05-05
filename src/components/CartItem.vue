<template>
  <v-card class="mb-4"> asd </v-card>
</template>

<script setup lang="ts">
import { ref, PropType } from "vue";
import { CartItem } from "@/store/types";

const props = defineProps({
  item: { type: Object as PropType<CartItem>, required: true },
});
</script>

<style scoped></style>
