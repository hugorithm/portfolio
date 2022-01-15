import Head from "next/head"
import Navbar from "../navbar.js";
import { Container, Box } from "@chakra-ui/react";

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Hugo Silva - Portfolio</title>
            </Head>
            <Navbar path={router.asPAth} />

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    );
}

export default Main;