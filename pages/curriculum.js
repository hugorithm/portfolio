import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Curriculum = () => (
    <Layout title="Curriculum Vitae">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Curriculum Vitae
            </Heading>
            <Section>
                <embed src="/documents/CV.pdf" width="700" height="950"></embed>
            </Section>
        </Container>
    </Layout>
)

export default Curriculum
export { getServerSideProps } from '../components/chakra'