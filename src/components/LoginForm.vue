<template>
    <h1>Bienvenido</h1>
    <form @submit.prevent="login">
        <label for="username">Usuario:</label>
        <input 
            type="text" 
            id="username" 
            placeholder="Ingrese su nombre de usuario"
            v-model="username"
        >
        <label for="">Contraseña:</label>
        <input 
            type="password"
            id="password"
            placeholder="Ingrese su contraseña"
            v-model="password"
        >
        <input type="submit" value="Entrar">
    </form>
</template>

<script>

import {authenticate} from '../helpers/LoginHelper'

export default {
    data () {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        async login() {
            const response = await authenticate(this.username, this.password);
            if (response) {
                this.$router.push({ name: 'home' })
            }
        }
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
form {
    margin-inline: auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
input[type=submit] {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    background-color: var(--violet-6);
    color: white;
    border: none;
    padding: 7px 0px;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 600;
}
input[type=submit]:hover {
    background-color: var(--violet-4);
    transition-duration: 0.1s;
}

input[type=text], input[type=password]  {
    padding: 5px 5px;
}

.teams-selector {
    display: flex;
    justify-content: space-between;
}

.container {
    width: 100%;
    overflow: auto;
}

table {
    margin-inline: auto;
    border-collapse: collapse;
    text-align: left;
}

th {
    padding: 6px;
    background: var(--blue-2);
}
</style>