import {
  ScaleFade,
  Container,
  Box,
  useColorModeValue,
  useColorMode,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

const Terminal = () => {
  const { isOpen, onOpen } = useDisclosure();
  const { colorMode } = useColorMode()

  setTimeout(() => {
    onOpen();
  }, 4000)

  return (
    <>
      <ScaleFade initialScale={0.01} in={!isOpen} style={{ zIndex: 100 }} reverse={true}>
        <Container position={"relative"} top={-100} left={0} zIndex={100} height={0}>
          <Box
            borderRadius="md"
            bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
            style={{ backdropFilter: 'blur(10px)' }}
            p={3}
            mb={6}
            mt={3}
            height={100}
            overflow={"hidden"}
            lign="left"
            boxShadow={colorMode === "dark" ? "8px 11px 10px 0px #131820" : "8px 11px 10px 0px #b6cdf3"}
            border={useColorModeValue('1px solid ', '1px solid #fff')}
          >
            <Text
              color={useColorModeValue('hyperBlue', 'hyperGreen')}
              fontFamily={"'IBMVGA8', monospace"}
              fontSize={16}
            >
              hugorithm:~$
            </Text>
            <Text className="typewriter">./load-3dmodel.sh -i -p 500</Text>
          </Box>
        </Container>
      </ScaleFade >
    </>
  )
}

export default Terminal;
