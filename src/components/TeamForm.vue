<template>
    <h1>Agregar un Equipo</h1>
    <form @submit.prevent="createTeam">
        <label for="name">Nombre:</label>
        <input 
            type="text" 
            id="name" 
            placeholder="Ingrese su nombre del equipo"
            v-model="name"
        >
        <label for="">Abreviacion:</label>
        <input 
            type="text"
            id="abbreviation"
            placeholder="Ingrese la abreviacion del equipo"
            v-model="abbreviation"
        >
        <input type="submit" value="Agregar">
    <div class="created" v-if="created">
        <p>✨ Equipo creado correctamente ✨</p>
    </div>
    </form>
</template>

<script>

import {saveTeam} from '../helpers/TeamHelper'

export default {
    data () {
        return {
            name: '',
            abbreviation: '',
            created: false
        }
    },
    methods: {
        async createTeam() {
            const response = await saveTeam(this.name, this.abbreviation);
            if (response.status === 200) {
                this.created = true;
                this.name = '';
                this.abbreviation = '';
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
    margin-top: 1rem;
    background-color: var(--violet-6);
    color: white;
    border: none;
    padding: 5px 0px;
    cursor: pointer;
    border-radius: 4px;
    font-weight: 600;
}
input[type=submit]:hover {
    background-color: var(--violet-4);
    transition-duration: 0.1s;
}

input[type=text] {
    padding: 5px 5px;
}

.created {
    background: #b2f2bb;
    border: 1px solid #8ce99a;
    padding: 2px;
    border-radius: 4px;
    text-align: center;
}
</style>