<template>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <title>Elias Portfolio</title>
  <div id="app">
    <main class="content">
      <SideBar />
      <RouterView />
      <HelloWorld msg="" />
      <EliasFooter />
    </main>
  </div>
</template>

<script>
import EliasFooter from './components/EliasFooter.vue';
import HelloWorld from './components/HelloWorld.vue';
import SideBar from './components/SideBar.vue';

export default {
  name: 'EliasApp',
  components: {
    HelloWorld,
    EliasFooter,
    SideBar
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-height: 100%;
}

html {
  scroll-behavior: smooth;
}

#app {
  font-family: "Inter", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #887BAF;
  background: rgb(0, 1, 37);
}


@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}
</style>
