<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;     
  justify-content: center;    
  align-items: center;        
  height: 100vh;              
  text-align: center;         
}

h1 {
  font-family: 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
  font-size: 5vw;
  line-height: normal;
  margin: 0;
}

@media (max-width: 768px) {
  .logo {
    width: 30vw;
  }

  h1 {
    font-size: 7vw;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 40vw;
  }

  h1 {
    font-size: 8vw;
  }
}
</style>
