import { useQueries, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchRates, fetchSymbols } from "../../Converter/api/fetchData";

/**
 * A custom React hook for currency information
 * 
 * @return {state} amount - amount for currency conversion
 * @return {state} currencyBase - first currency country
 * @return {state} currencyQuote - second currency country
 */
function useCurrency() {
    const [amount, setAmount] = useState(25);
    const [currencyBase, setCurrencyBase] = useState("krw");
    const [currencyQuote, setCurrencyQuote] = useState("cad");

    // React queries
    const [ratesData, symbolsData] = useQueries({
        queries: [
            {
                queryKey: [currencyBase],
                queryFn: () => fetchRates(currencyBase),
                staleTime: Infinity
            },
            {
                queryKey: [''],
                queryFn: () => fetchSymbols(),
                stateTime: Infinity
            }
        ]
    });

    // Retrieve necessary information
    const isLoading = [ratesData].some((query) => query.isLoading);
    const isError = [ratesData].some((query) => query.isError);
    const convertedAmount = ratesData.data ? (ratesData.data[currencyBase][currencyQuote] * amount).toFixed(2) : null;
    const date = ratesData.data ? new Date(ratesData.data?.date) : null;
    const currencyList = symbolsData.data ? Object.keys(symbolsData.data) : {};
    
    return { 
        amount,
        setAmount,
        currencyBase,
        setCurrencyBase,
        currencyQuote,
        setCurrencyQuote,
        currencyList,
        convertedAmount,
        ratesData,
        symbolsData,
        date,
        isLoading,
        isError
    };
}

export default useCurrency;