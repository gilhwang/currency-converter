import { useState } from "react";

/**
 * A custom React hook for currency information
 * 
 * @return {state} amount - amount for currency conversion
 * @return {state} currencyBase - first currency country
 * @return {state} currencyQuote - second currency country
 */
function useCurrency() {
    const [amount, setAmount] = useState(25);
    const [currencyBase, setCurrencyBase] = useState("GBP");
    const [currencyQuote, setCurrencyQuote] = useState("EUR");

    return { amount, currencyBase, currencyQuote };
}

export default useCurrency;