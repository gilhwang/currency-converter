import { axios } from "../../../lib/axios";

/**
 * Get currency rate for base currency via API
 * 
 * @param {string} currencyBase 
 * @returns {any} latest currency rate information
 */
export async function fetchRates(currencyBase) {
    // const { data } = await axios.get(
    //     `/latest?base=${currencyBase}&apikey=${import.meta.env.VITE_API_KEY}`
    // );
    const { data } = await axios.get(
        `/currencies/${currencyBase}.json`
    );
    return data;
}

/**
 * Get all available currencies via API
 */
export async function fetchSymbols() {
    // const { data } = await axios.get(
    //     `/symbols?apikey=${import.meta.env.VITE_API_KEY}`
    // );
    const { data } = await axios.get(
        `/currencies.json`
    );
    return data;
}