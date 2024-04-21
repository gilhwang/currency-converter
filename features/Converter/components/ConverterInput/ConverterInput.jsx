import { FormLabel, Input } from "@chakra-ui/react";

function ConverterInput({amount, onAmountChange}) {
    return (
        <>
            <FormLabel 
                htmlFor="amount" 
                color='purple.300'
            >
                Amount
            </FormLabel>
            <Input 
                id='amount' 
                size='lg' 
                type='number' 
                value={amount} 
                min={0} 
                onChange={(e) => onAmountChange(e.target.value)}
            />
        </>
        
    )
}

export default ConverterInput;