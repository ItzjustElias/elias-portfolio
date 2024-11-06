<template>
    <footer>
      <strong>&COPY;</strong> Elias Bloem ~ {{ new Date().getFullYear() }}
    </footer>
</template>
  
<script>
  export default {
    name: 'EliasFooter'
  }
</script>
  
<style scoped>

footer {
    position: fixed;
    font-family: 'Arial Narrow Bold', sans-serif;;
    left: 0;
    bottom: 0;
    width: 100%;
    margin-bottom: 5px;
    text-align: center;
    opacity: 60%;
    font-weight: bold !important;
}

strong {
  font-weight: bolder;
}

</style>
  