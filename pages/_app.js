import { ChakraProvider } from "@chakra-ui/provider";
import Layout from "../components/layouts/main";
import theme from "../libs/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from 'framer-motion';
import '../css/style.css';

const Website = ({ Component, pageProps, router }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence
                    exitBeforeEnter
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 })
                        }
                    }}
                >
                    <Component  {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    );
}

export default Website;