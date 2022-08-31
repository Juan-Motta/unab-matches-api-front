<template>
  <h1>Agregar un Partido</h1>
    <form @submit.prevent="createMatch">
        <div class="teams-selector">
            <label for="name">Equipo Local:
                <select v-model="localTeam">
                    <option disabled value="">Seleccione un equipo</option>
                    <option v-bind:key="item" v-for="item in teams" :value="item">{{item.name}}</option>
                </select>
            </label>
            <label for="name">Equipo Visitante:
                <select v-model="awayTeam">
                    <option disabled value="">Seleccione un equipo</option>
                    <option v-bind:key="item" v-for="item in teams" :value="item">{{item.name}}</option>
                </select>
            </label>
        </div>
        <input type="date" :value="date && date.toISOString().split('T')[0]"
                     @input="date = getDateClean($event.target.valueAsDate)">
        <input type="submit" value="Agregar">
    </form>
    <div class="container">
        <table class="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Equipo Local</th>
                <th>Goles Equipo Local</th>
                <th>Goles Equipo Visitante</th>
                <th>Equipo Visitante</th>
                <th>Fecha</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            <RowComponent :key="item.id" v-for="item in items" :item="item">"</RowComponent>
        </tbody>
        </table>
    </div>
</template>

<script>

import { useStore } from '../stores/store'
import { fetchAllTeams } from '../helpers/TeamHelper';
import { fetchAllMatches, saveMatch, updateScore } from '../helpers/MatchHelper';
import RowComponent from '../components/RowComponent.vue'

export default {
    components: {
        RowComponent
    },
    data () {
        return {
            localTeam: null,
            awayTeam: null,
            newMatch: null,
            date: new Date(Date.now()),
            teams: [],
            items: []
        }
    },
    methods: {
        async createMatch() {
            const store = useStore()
            const response = await saveMatch(
                store.getUserId,
                this.localTeam.id,
                this.awayTeam.id,
                this.date
            );
            if (response.status === 200) {
                this.created = true;
                this.name = '';
                this.abbreviation = '';
                await this.updateMatchesList()
            }
            
        },
        setMyDateToToday() {
            this.date = new Date();
        },
        addADayToMyDate() {
            if (this.date) {
                this.date = new Date(this.date.setDate(this.date.getDate() + 1));
            }
        },
        getDateClean(currentDate) {
            let month = currentDate.getUTCMonth() + 1;
            if (month < 10) {
                month = "0" + month
            };
            let day = currentDate.getUTCDate();
            if (day < 10) {
                day = "0" + day
            };
            const dateStr =
                currentDate.getUTCFullYear() + "-" + month + "-" + day + "T00:00:00";
            const date = new Date(dateStr);
            return date;
        },
        showInfo(index, data) {
            if (index === 0 || index === 3) {
                return data.name
            } else {
                return '<span style="color: red">This should be red.</span>'
            }
        },
        async updateMatch(item) {
            const resp = await updateScore(
                item.id, 
                item.local_team_goals, 
                item.away_team_goals
            )
            console.log(resp);
        },
        async updateMatchesList () {
            try {
            const matches = await fetchAllMatches();
            console.log(matches.data);
            this.items = matches.data
            } catch (err) {
                console.log(err);
            }
        },
        async getAllTeams() {
            try {
                const teams = await fetchAllTeams();
                this.teams = teams.data
            } catch (err) {
                console.log(err);
            }
        }
    },
    async created() {
        await this.getAllTeams();
        await this.updateMatchesList();
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