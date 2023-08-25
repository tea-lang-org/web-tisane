
import './App.css'
import { ChakraProvider, Grid } from '@chakra-ui/react'
import { Header } from './components/header.tsx'
import { Box } from './components/box.tsx'
import { MainBox } from './components/main-box.tsx'
function App() {

  return (
    <ChakraProvider>
      <Grid
        templateAreas={`"header header"
                  "nav main"`}
        gridTemplateRows={'90px 1fr 30px'}
        gridTemplateColumns={'300px 1fr'}
        h='300px'
        gap='5'
      >
        <Header />
        <Box />
        <MainBox />
      </Grid>
      
    </ChakraProvider>


  )
}

export default App
