<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card color="primary">
          <v-card-title>New Cinema</v-card-title
          ><v-tabs left density="compact">
            <v-tab
              class="px-2"
              v-for="(tab, i) in tabs"
              :key="i"
              :title="tab.title"
              :to="tab.route"
            ></v-tab></v-tabs
        ></v-card>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
const tabs = [
  { title: "Главная", route: "/" },
  { title: "Мои билеты", route: "/cart" },
  { title: "О проекте", route: "/about" },
];
</script>
