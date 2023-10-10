import { Box, Container, Divider } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Container maxW={"container.lg"}>
      <Divider my={6} />
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Hugo Silva.
      </Box>
    </Container>

  )
}

export default Footer;