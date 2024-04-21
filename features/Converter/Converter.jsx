import { Box, Spinner, Text } from "@chakra-ui/react";
import useCurrency from "../common/hooks/useCurrency";
import ConverterHeader from "./components/ConverterHeader";

function Converter() {
    const { 
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
    } = useCurrency();

    // Error encountered
    if (isError) {
        return (
            <Text fontWeight='bold' fontSize='3xl' color='white' my='10'>
                Fatal error!
            </Text>
        );
    }

    // Data still loading
    if (isLoading) {
        return (
            <Spinner
                margin='auto 0'
                size='xl'
                thickness='4px'
                speed='0.65s'
                color='purple.500'
                emptyColor='purple.200'
            />
        );
    }
    
    return (
        <Box width={{ base: '90vw', sm: '45vw'}} margin='0 auto'>
            <ConverterHeader />
        </Box>
    );
}

export default Converter;