import NextLink from 'next/link';
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from '@chakra-ui/react';
import { ImHome } from 'react-icons/im';

const NotFound = () => {
    return (
        <Container>
            <Heading as="h1">404 Page Not found 😭</Heading>
            <Text>The page you&apos;re looking for was not found.</Text>
            <Divider my={6} />
            <Box my={6} align="center">
                <Button as={NextLink} href="/" colorScheme="teal"><ImHome />&nbsp; Return Home</Button>
            </Box>
        </Container>
    )
}

export default NotFound