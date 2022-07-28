import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'


const Masters = () => (
    <Layout title="Master&apos;s Thesis">
        <Container maxW='auto'>
            <Heading as="h3" fontSize={20} mb={4}>
                "Management and Analysis Platform for Data Based in Blockchain Technology"
            </Heading>
            <Section>
                <Box lign="center" my={4}>
                    <Paragraph>
                        This is the result of a lot o work and commitment. 
                        This thesis comprehends every step, from the system design to the implementation of a Blockchain network.
                        Hopefully a great contribution to the scientific community 😊
                    </Paragraph>
                </Box>
                <embed src="/documents/Master_Thesis.pdf" width="700" height="950"></embed>
            </Section>
        </Container>
    </Layout>
)

export default Masters
export { getServerSideProps } from '../components/chakra'