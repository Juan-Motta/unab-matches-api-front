<template>
    <tr>
        <td >{{item.id}}</td>
        <td >{{item.local_team.name}}</td>
        <td><input type="number" v-model="localGoals" id="localGoals"></td>
        <td><input type="number" v-model="awayGoals" id="awayGoals"></td> 
        <td >{{item.away_team.name}}</td>
        <td >{{item.date}}</td>
        <td ><button v-on:click="updateMatch" >Editar</button></td>
    </tr>
</template>

<script>

import { updateScore } from '../helpers/MatchHelper';

export default {
    props: {item:Object},
    data () {
        return {
            localGoals: this.item.local_team_goals,
            awayGoals: this.item.away_team_goals
        }
    },
    methods: {
        async updateMatch() {
            const resp = await updateScore(
                this.item.id, 
                this.localGoals, 
                this.awayGoals
            )
            console.log(resp);
        },
    }
}
</script>

<style scoped>
button {
    background: var(--violet-6);
    color: white;
    border: none;
    border-radius: 3px;
    padding: 4px 8px;
    font-weight: 600;
}

th, td {
    padding: 6px;
    border-bottom: 1px solid #f1f1f1;
}

tr {
    border-left: 1px solid #f1f1f1;
    border-right: 1px solid #f1f1f1;
}
</style>