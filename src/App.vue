<template>
  <title>Elias Portfolio</title>
  <div id="app">
    <HelloWorld msg="Website under Development" />
    <EliasFooter />
    <EliasTypeWriterTest />
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

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-height: 100%;
  overflow-y: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #887BAF;
  background: rgb(0, 1, 37);
}
</style>
