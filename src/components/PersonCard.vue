<template>
  <div class="d-flex mx-2 my-1">
    <v-img :src="props.person.posterUrl" max-width="40"></v-img>
    <div class="my-auto ml-2">
      <span>{{ props.person.nameRu }}</span
      ><br />
      <div v-if="props.person.description">
        <span>...{{ props.person.description }}</span
        ><br />
      </div>
      <div v-else>
        <span>{{ props.person.professionText.slice(0, -1) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import { MovieCredits } from "@/store/types";
const props = defineProps({
  person: { type: Object as PropType<MovieCredits>, required: true },
});
</script>

<style scoped></style>
