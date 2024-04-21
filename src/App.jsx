import { Flex } from "@chakra-ui/react"
import Converter from "../features/Converter"


function App() {
  return (
    <div>
      <Flex 
        bgGradient='linear(to-t, #ae085c, #2e0656)'
        height='100vh'
        justifyContent='center'
        >
        <Converter/>
      </Flex>
    </div>
  )
}

export default App
