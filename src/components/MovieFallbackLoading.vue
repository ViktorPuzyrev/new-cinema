<template>
  <v-row>
    <v-col cols="12" xs="12" sm="4" md="4" lg="3" xl="3">
      <v-responsive :aspect-ratio="0.6"
        ><MovieLoading class="d-flex"
      /></v-responsive>
      <v-responsive class="mt-4 d-none d-md-flex d-lg-none" :aspect-ratio="0.5"
        ><MovieLoading class="d-flex" />
      </v-responsive>
    </v-col>
    <v-col cols="12" xs="12" sm="8" md="8" lg="6" xl="7"
      ><v-responsive :aspect-ratio="1.3"
        ><MovieLoading class="d-flex"
      /></v-responsive>
      <v-responsive class="mt-4 mb-4 d-none d-md-flex" :aspect-ratio="16 / 9"
        ><MovieLoading class="d-flex"
      /></v-responsive>
      <v-responsive class="d-none d-md-flex" :aspect-ratio="16 / 9"
        ><MovieLoading class="d-flex"
      /></v-responsive>
    </v-col>
    <v-col cols="12" xs="12" md="6" lg="3" xl="2"
      ><v-responsive class="mb-4 d-sm-flex d-md-none" :aspect-ratio="16 / 9"
        ><MovieLoading class="d-flex"
      /></v-responsive>
      <v-responsive class="mb-4 d-sm-flex d-md-none" :aspect-ratio="16 / 9"
        ><MovieLoading class="d-flex"
      /></v-responsive>
      <v-responsive class="d-none d-lg-flex" :aspect-ratio="0.5"
        ><MovieLoading class="d-flex"
      /></v-responsive>
      <v-responsive class="d-flex d-md-none" :aspect-ratio="16 / 9"
        ><MovieLoading class="d-flex"
      /></v-responsive>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import MovieLoading from "@/components/MovieLoading.vue";
</script>

<style scoped></style>
