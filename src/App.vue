<template>
  <v-app>
    <TheHeader />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import TheHeader from "@/components/TheHeader.vue";
</script>
