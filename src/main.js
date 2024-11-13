import { createApp } from "vue"; // for Vue 3
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // New import syntax for Vue Router 4
import EliasHome from "./components/EliasHome.vue";

const routes = [{ path: "/", component: EliasHome },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount("#app");
