import { Box, Text } from "@chakra-ui/react";

function ConverterDisplay({
    amount, 
    ratesData, 
    currencyBase, 
    currencyQuote, 
    convertedAmount, 
    date}) 
{
    return (
        <Box textAlign='right'>
            <Text fontSize='lg' fontWeight='bold'>
                {amount} {currencyBase.toUpperCase()}
            </Text>
            <Text fontSize='2xl' fontWeight='bold' color='purple.500'>
                {convertedAmount} {currencyQuote.toUpperCase()}
            </Text>
            <Text>
                Market rates collected - {date}
            </Text>
        </Box>
    )
}

export default ConverterDisplay;