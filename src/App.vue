<template>
  <header>
    <div>
      <nav>
        <RouterLink v-if="isLoged" to="/">Home</RouterLink>
        <RouterLink v-if="isLoged" to="/teams">Equipos</RouterLink>
        <RouterLink v-if="isLoged" to="/matches">Partidos</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

</template>

<script>

import { useStore } from './stores/store'

export default {
    data () {
        return {
        }
    },
    computed: {
      isLoged() {
        return useStore().getIsLogged
      }
    }
}

</script>


<style scoped>
nav {
  height: 50px;
  display: flex;
  place-items: center;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  background-color: var(--blue-6);
  box-shadow: 0px 2px 6px;
  margin-bottom: 1rem;
}
a {
  color: white;
  text-decoration: none;
  
}
</style>
