import axios from 'axios';

export const Api = axios.create({
    baseURL:'http://localhost/source_code',
    withCredentials: true, 
})


