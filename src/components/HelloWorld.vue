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
  flex-direction: column;     /* Stack items vertically */
  justify-content: center;    /* Center horizontally */
  align-items: center;        /* Center vertically */
  height: 100vh;              /* Full viewport height */
  text-align: center;         /* Center text inside the element */
}

h1 {
  text-shadow: 100px;
  font-family: 'Arial Narrow Bold', sans-serif;
  text-transform: uppercase;
  font-size: 5vw;             /* Responsive font size */
  padding: 10px;
  line-height: normal;
  margin: 0;
}

/* Media query for smaller screens */
@media (max-width: 768px) {
  .logo {
    width: 30vw;              /* Slightly larger on smaller screens */
  }

  h1 {
    font-size: 7vw;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 40vw;              /* Adjust for very small screens */
  }

  h1 {
    font-size: 8vw;
  }
}
</style>
