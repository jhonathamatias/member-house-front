import axios from 'axios';

import { getToken, hasToken } from '../tools/authStorage';

const api = axios.create({
    baseURL: "http://memberhouse.local"
});

api.interceptors.request.use(async config => {
    if (hasToken()) {
        const token = getToken();

        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default api;