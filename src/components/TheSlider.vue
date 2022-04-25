<template>
  <v-card class="pa-3">
    <span>Скоро в прокате</span>
    <div v-if="loading">
      <v-row>
        <v-col v-for="(item, i) of columns.columns" :key="i">
          <v-card :height="columns.imgHeight" class="d-flex"
            ><v-progress-circular
              class="ma-auto"
              indeterminate
              color="primary"
              :size="70"
              :width="7"
            >
            </v-progress-circular></v-card
        ></v-col>
      </v-row>
    </div>
    <div v-else>
      <v-carousel cycle height="100%" hide-delimiters show-arrows="hover">
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
                        contain
                        eager
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
import { Movies } from "@/store/types";
import { useDisplay } from "vuetify";

const store = useStore();
const loading = computed((): boolean => store.state.loading);
const UpcomingMovies = computed(
  (): Movies[] => store.getters.upcomingMoviesList
);
const { name } = useDisplay();
const columns = computed(() => {
  switch (name.value) {
    case "xs":
      return { columns: 1, imgHeight: 500 };
    case "sm":
      return { columns: 2, imgHeight: 500 };
    case "md":
      return { columns: 2, imgHeight: 600 };
    case "lg":
      return { columns: 3, imgHeight: 520 };
    case "xl":
      return { columns: 4, imgHeight: 600 };
    case "xxl":
      return { columns: 6, imgHeight: 500 };
    default:
      return { columns: 1, imgHeight: 500 };
  }
});
</script>

<style scoped></style>
