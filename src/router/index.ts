import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Главная страница - New Cinema" },
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
    meta: { title: "О проекте - New Cinema" },
  },
  {
    path: "/cart",
    name: "cart",
    component: () =>
      import(/* webpackChunkName: "cart" */ "@/views/CartView.vue"),
    meta: { title: "Мои билеты - New Cinema" },
  },
  {
    path: "/movie/:id",
    name: "movie",
    component: () =>
      import(/* webpackChunkName: "movie" */ "@/views/MovieView.vue"),
    meta: { title: "Фильм - New Cinema" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = (to.meta.title as string) || "Some Default Title";
});

export default router;
