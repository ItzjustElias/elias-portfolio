import { createApp } from "vue"; // for Vue 3
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // New import syntax for Vue Router 4
import EliasBlog from "./components/EliasBlog.vue";
import EliasProjects from "./components/EliasProjects.vue";
import EliasAbout from "./components/EliasAbout.vue";
import EliasHome from "./components/EliasHome.vue";

// Define your routes
const routes = [
  { path: '/', name: 'Home', component: EliasHome },
  { path: '/about', name: 'About', component: EliasAbout },
  { path: '/blog', name: 'Blog', component: EliasBlog },
  { path: '/projects', name: 'Projects', component: EliasProjects }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Create and mount the app
const app = createApp(App);
app.use(router);
app.mount("#app");
