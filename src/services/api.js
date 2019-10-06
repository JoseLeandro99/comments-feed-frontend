import axios from 'axios';

const api = axios.create({
    baseURL: 'https://appscommetsfeed.herokuapp.com/'
});

export default api;