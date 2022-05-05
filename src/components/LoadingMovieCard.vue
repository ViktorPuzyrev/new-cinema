<template>
  <v-card class="pa-3 mb-3">
    <v-row no-gutter class="d-flex" cols="12">
      <v-col>
        <v-card width="100%" height="260" class="d-flex">
          <v-progress-circular
            class="ma-auto"
            indeterminate
            color="grey"
            :size="70"
            :width="7"
          >
          </v-progress-circular>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
