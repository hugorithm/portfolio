import Head from "next/head"
import Navbar from "../navbar.js";
import dynamic from 'next/dynamic';
import { Container, Box } from "@chakra-ui/react";
import GuitarLoader from '../guitar-model-loader';
import Footer from "../footer.js";

const Model = dynamic(() => import('../guitar-model'), {
    ssr: false,
    loading: () => <GuitarLoader />
})


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Hugo's homepage" />
                <meta name="author" content="Hugo Silva" />
                <meta name="author" content="hugorithm" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta name="twitter:title" content="Hugo Silva" />
                <meta property="og:site_name" content="Hugo Silva" />
                <meta name="og:title" content="Hugo SIlva" />
                <meta property="og:type" content="website" />
                <title>Hugo Silva - Portfolio</title>
            </Head>
            <Navbar path={router.asPAth} />

            <Container maxW="1000px" pt={14}>
                <Model />

                {children}
            </Container>
            <Footer />
        </Box>
    );
}

export default Main;