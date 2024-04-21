import { Avatar, Flex, Select } from "@chakra-ui/react"
import useFlags from "../../../common/hooks/useFlags"

function ConverterOption({symbol, currencyList, onCurrencyChange, currency}) {
    /* Variables */
    const { flagUrl } = useFlags(currency);
    
    return (
        <Flex gap='1rem' shadow='md' padding='1rem' borderRadius='lg'>
            <Avatar src={flagUrl} size='xs' />
            <Select
                variant='unstyled' 
                size='md' 
                defaultValue={currency} 
                onChange={(e) => onCurrencyChange(e.target.value)}
            >
                {currencyList.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency} - {symbol ? symbol[currency] : 'No data found'}
                    </option>
                ))}
            </Select>
        </Flex>
    )
}

export default ConverterOption