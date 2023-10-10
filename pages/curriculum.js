import { Container, Heading, Link } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


const Curriculum = () => (
  <Layout title="Curriculum Vitae">
    <Container maxW='auto'>
      <Heading as="h3" fontSize={20} mb={4}>
        Curriculum Vitae
      </Heading>
      <Section>
        <Link href="/documents/CV.pdf">CV</Link>
        <embed src="/documents/CV.pdf" width="700" height="950"></embed>
      </Section>
    </Container>
  </Layout>
)

export default Curriculum;
export { getServerSideProps } from '../components/chakra';