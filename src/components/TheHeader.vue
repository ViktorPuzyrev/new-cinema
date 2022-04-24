<template>
  <v-app-bar color="primary" absolute>
    <v-container class="d-flex">
      <v-app-bar-title class="my-auto" @click="$router.push('/')"
        >New Cinema
      </v-app-bar-title>
      <v-badge
        :content="messages"
        :value="messages"
        color="blue"
        offset-x="5"
        offset-y="5"
      >
        <v-btn icon to="/cart">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
      </v-badge>
      <v-btn icon to="/about">
        <v-icon>mdi-information-variant</v-icon>
      </v-btn>
    </v-container>
  </v-app-bar>
</template>

<script setup lang="ts">
const messages = 2;
</script>

<style scoped></style>
