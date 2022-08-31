import axios from 'axios'
import jwt_decode from 'jwt-decode'
import moment from 'moment-timezone'

import { useStore } from '../stores/store'

const BASE_URL = 'http://localhost:8000';

async function authenticate(username = '', password = '') {
    const store = useStore()
    try {
        const body = {
            username,
            password
        }
        const resp = await axios.post(`${BASE_URL}/api/login`, body);
        store.setToken(resp?.data?.token);
        store.login();
        return true;
    } catch (err) {
        return false;
    }
}

export { authenticate }