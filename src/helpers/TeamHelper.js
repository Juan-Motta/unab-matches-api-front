import axios from 'axios'

const BASE_URL = 'http://localhost:8000';

async function saveTeam(name, abbreviation) {
    try {
        const url = `${BASE_URL}/api/team`;
        const body = {
            name,
            abbreviation
        }
        const resp = await axios.post(url, body);
        return resp;
    } catch (err) {
        return err;
    }
}

async function fetchAllTeams() {
    try {
        const resp = await axios.get(`${BASE_URL}/api/team`);
        return resp;
    } catch (err) {
        return err;
    }
}

export { saveTeam, fetchAllTeams }