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
import { useDisplay } from "vuetify";
import store from "./store";
import TheHeader from "@/components/TheHeader.vue";

(function setBreakpoint() {
  const { name } = useDisplay();
  store.commit("updateBreakpoint", name.value);
})();
</script>
