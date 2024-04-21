import { Flex } from "@chakra-ui/react"
import Converter from "../features/Converter"


function App() {
  return (
    <div>
      <Flex 
        bgGradient='linear(to-t, #93dbaf, #08751a)'
        height='100vh'
        justifyContent='center'
        >
        <Converter/>
      </Flex>
    </div>
  )
}

export default App
