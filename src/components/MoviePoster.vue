<template>
  <v-card><v-img :src="posterUrl" cover></v-img></v-card>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import useAPI from "@/services/API";
import { MovieDetails } from "@/store/types";

const route = useRoute();
const { posterUrl }: MovieDetails = await useAPI(`movie/${route.params.id}`);
</script>

<style scoped></style>
