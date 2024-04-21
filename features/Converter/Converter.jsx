import { Box, Grid, GridItem, Spinner, Text } from "@chakra-ui/react";
import useCurrency from "../common/hooks/useCurrency";
import ConverterHeader from "./components/ConverterHeader";
import ConverterOption from "./components/ConverterOption";
import ConverterInput from "./components/ConverterInput";
import ConverterDisplay from "./components/ConverterDisplay";
import { RepeatIcon } from "@chakra-ui/icons";

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
        <>
            <Box width={{ base: '90vw', sm: '45vw'}} margin='0 auto'>
                <ConverterHeader />

                <Grid
                    templateColumns='repeat(5, 1fr)'
                    templateRows='repeat(2, 1fr)'
                    padding={{base: '6', sm: '10'}}
                    gap='1rem'
                    backgroundColor='white'
                    borderRadius='lg'
                >
                    <GridItem
                        colSpan={{ base: 5, sm: 2 }}
                        justifySelf='center'
                        alignSelf='center'
                    >
                        <ConverterOption 
                            symbol={symbolsData.data} 
                            currencyList={currencyList}
                            onCurrencyChange={setCurrencyBase} 
                            currency={currencyBase}
                        />
                    </GridItem>
                    <GridItem
                        display={{ base: 'none', sm: 'block' }}
                        colSpan={1}
                        justifySelf='center'
                        alignSelf='center'
                    >
                        <RepeatIcon boxSize='2rem' color='purple.300'/>
                    </GridItem>
                    <GridItem
                        colSpan={{ base: 5, sm: 2 }}
                        justifySelf='center'
                        alignSelf='center'
                    >
                        <ConverterOption 
                            symbol={symbolsData.data} 
                            currencyList={currencyList}
                            onCurrencyChange={setCurrencyQuote} 
                            currency={currencyQuote}
                        />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <ConverterInput
                            amount={amount}
                            onAmountChange={setAmount}
                        />
                    </GridItem>
                    <GridItem 
                        colSpan={3} 
                        justifySelf='right'
                        alignSelf='right'
                    >
                        <ConverterDisplay 
                            amount={amount} 
                            ratesData={ratesData.data} 
                            currencyBase={currencyBase} 
                            currencyQuote={currencyQuote}
                            convertedAmount={convertedAmount}
                            date={date}
                        />
                    </GridItem>

                </Grid>

                <Text 
                    textAlign='center'
                    marginTop='1.rem'
                    color='white'
                >
                    Built by Gil Hwang using React, React Query, Axios & Chakra UI
                </Text>
                       
            </Box>
        </>
    );
}

export default Converter;