<template>
  <v-card class="pa-3" color="blue-grey">
    <span class="text-h5 text-white">Скоро в прокате</span>
    <div v-if="loading">
      <v-row>
        <v-col v-for="(item, i) of columns.columns" :key="i">
          <v-card :height="columns.imgHeight" class="d-flex"
            ><v-progress-circular
              class="ma-auto"
              indeterminate
              color="blue-grey"
              :size="70"
              :width="7"
            >
            </v-progress-circular></v-card
        ></v-col>
      </v-row>
    </div>
    <div v-else>
      <v-carousel height="100%" hide-delimiters show-arrows="hover">
        <template v-for="(movie, index) in UpcomingMovies">
          <v-carousel-item
            v-if="(index + 1) % columns.columns === 1 || columns.columns === 1"
            :key="index"
            eager
          >
            <v-row class="flex-nowrap">
              <template v-for="(n, i) in columns.columns">
                <template v-if="+index + i < UpcomingMovies.length">
                  <v-col :key="i">
                    <router-link to="">
                      <v-img
                        :height="columns.imgHeight"
                        :src="UpcomingMovies[+index + i].posterUrl"
                        eager
                        cover
                      ></v-img
                    ></router-link>
                  </v-col>
                </template>
              </template>
            </v-row>
          </v-carousel-item>
        </template>
      </v-carousel>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { Movie } from "@/store/types";
import { useDisplay } from "vuetify";

const store = useStore();
const loading = computed((): boolean => store.state.loading);
const UpcomingMovies = computed((): Movie[] =>
  store.getters.upcomingMoviesList.slice(
    0,
    store.getters.upcomingMoviesList.length -
      (store.getters.upcomingMoviesList.length % columns.value.columns)
  )
);
const { name } = useDisplay();
const columns = computed(() => {
  switch (name.value) {
    case "xs":
      return { columns: 1, imgHeight: 450 };
    case "sm":
      return { columns: 4, imgHeight: 250 };
    case "md":
      return { columns: 4, imgHeight: 250 };
    case "lg":
      return { columns: 6, imgHeight: 250 };
    case "xl":
      return { columns: 9, imgHeight: 250 };
    default:
      return { columns: 12, imgHeight: 250 };
  }
});
</script>

<style scoped></style>
