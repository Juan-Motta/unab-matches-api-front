import axios from 'axios'
import jwt_decode from 'jwt-decode'
import moment from 'moment-timezone'

import { useStore } from '../stores/store'

const BASE_URL = 'http://localhost:8000';

async function saveMatch(user_id, local_team_id, away_team_id, date) {
    try {
        const body = {
            user: {
                id: user_id
            },
            local_team: {
                id: local_team_id
            },
            away_team: {
                id: away_team_id
            },
            date,
            local_team_goals: 0,
            away_team_goals: 0
        }
        const resp = await axios.post(`${BASE_URL}/api/match/`, body);
        return resp;
    } catch (err) {
        return err;
    }
}

async function updateScore(match_id ,local_team_goals, away_team_goals) {
    try {
        const body = {
            local_team_goals,
            away_team_goals
        }
        console.log(body);
        console.log(match_id);
        const resp = await axios.put(`${BASE_URL}/api/match/${match_id}`, body);
        return resp;
    } catch (err) {
        return err;
    }
}

async function fetchAllMatches() {
    try {
        const resp = await axios.get(`${BASE_URL}/api/match/all`);
        return resp;
    } catch (err) {
        return err;
    }
}

export { saveMatch, updateScore, fetchAllMatches }