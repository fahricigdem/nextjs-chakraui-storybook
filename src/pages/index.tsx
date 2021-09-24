import Hero from 'components/Hero'
import Container from 'components/Container'
import DarkModeSwitch from 'components/DarkModeSwitch'
import Button from 'components/Button'
import Badge from 'components/Badge'
import Card from 'components/Card'

const Index = () => (
  <Container height="100vh">
    <DarkModeSwitch />

    <Hero />
    <Button colorScheme="blue">Hello Lorem ipsum</Button>
    <Badge colorScheme="red" variant="outline" >Fahri Cigdem</Badge>
    <Card id="https://stackoverflow.com/questions/35074365/typescript-interface-default-values"/>
  </Container>
)

export default Index
