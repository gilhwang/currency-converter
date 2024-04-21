import useCurrency from "../common/hooks/useCurrency";

function Converter() {
    const { amount, currencyBase, currencyQuote } = useCurrency();

    return (
        <>
            <>{amount}</>
            <>{currencyBase}</>
            <>{currencyQuote}</>
        </>
    );
}

export default Converter;