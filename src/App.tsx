import { Box, Container } from '@chakra-ui/react'
import { Provider } from './components/ui/provider'
import { Intro, Try } from './components'

export const App = () => {
  return (
    <Provider>
      <Container colorPalette={'teal'}>
        <Box my={40}>
          <Intro />
        </Box>
        <Box mt={16}>
          <Try />
        </Box>
      </Container>
    </Provider>
  )
}