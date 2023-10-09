import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { ProjectGridItem } from '../components/grid-item';

import droobee from '../public/images/projects/droobee.png';
import blockchain from '../public/images/projects/blockchain.png';
import hopfencraft from '../public/images/projects/hopfencraft.png';


const Projects = () => (
    <Layout title="Projects">
        <Container maxW='auto'>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                  <ProjectGridItem id="hopfencraft" title="HopfenCraft" thumbnail={hopfencraft}>
                        A Beer E-commerce shop made in Java Spring Boot and React + Redux with Typescript and MaterialUI!
                  </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="droobee" title="Droobee" thumbnail={droobee}>
                        A Music Bot for Discord, that supports queues, playlists and multiple Guilds!
                    </ProjectGridItem>
                </Section>
                <Section>
                    <ProjectGridItem id="blockchain" title=" Blockchain Solution for Healthcare Data Tracking" thumbnail={blockchain}>
                        A Blockchain Solution for Healthcare Data Tracking!
                    </ProjectGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra';