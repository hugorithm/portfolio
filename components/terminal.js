import {
    Fade,
    ScaleFade,
    Slide,
    SlideFade, Button,
    Container,
    Box,
    useColorModeValue,
    Text,
    useDisclosure
} from '@chakra-ui/react';

const Terminal = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();

    setTimeout(()=>{
        onOpen();
    }, 3000)

    return (
        <>
            <ScaleFade initialScale={0.01} unmountOnExit={true} in={!isOpen} style={{ zIndex: 10 }}>
                <Container maxW={"container.sm"}>
                    <Box borderRadius="md" bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')}
                        p={3} mb={6} mt={3} height={100} overflow={"hidden"} align="left" boxShadow={"8px 11px 10px 0px #131820"} border={useColorModeValue('1px solid ', '1px solid #fff')}>
                        <Text color={useColorModeValue('#3d7aed', '#57e296')} fontFamily={"'Fira Code', monospace"} letterSpacing=".15rem" fontSize={13}>hugorithm:~$ </Text>
                        <Text className="typewriter">./load-3dmodel.sh -i -p 500</Text>
                    </Box>
                </Container>
            </ScaleFade>
        </>
    )
}

export default Terminal;