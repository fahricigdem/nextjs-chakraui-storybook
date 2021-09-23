import Hero from 'components/Hero'
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'
import Button from 'components/Button'

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />

    <Hero />
    <Button colorScheme="blue">Hello Lorem ipsum</Button>
  </Container>
)

export default Index
