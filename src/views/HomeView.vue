<script setup>
</script>

<template>
  <h1>Home</h1>
  <h2>Bienvenido a la aplicacion de partidos</h2>
  <div>
    <img alt="Vue logo" class="logo" src="@/assets/svg1.svg" width="350" height="350" />
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>

<style scoped>
h1 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
}

h2 {
    font-size: 1.25rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 1rem;
}

div {
  margin-inline: auto;
}

img {
  display: block;
  margin-inline: auto;
}

</style>