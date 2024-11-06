<template>
  <div id="app">
    <HelloWorld msg="Website under Development!" />
    <EliasFooter />
  </div>
</template>

<script>
import EliasFooter from './components/EliasFooter.vue';
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'EliasApp',
  components: {
    HelloWorld,
    EliasFooter
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2e2e2e;
}
</style>
