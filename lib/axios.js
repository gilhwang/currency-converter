import Axios from 'axios';

// Environment variables
const API_DATE = import.meta.env.VITE_EXCHANGE_DATE;
const API_VERSION = import.meta.env.VITE_EXCHANGE_VERSION;

export const axios = Axios.create({
    baseURL:`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${API_DATE}/${API_VERSION}`
});