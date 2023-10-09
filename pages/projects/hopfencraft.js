import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => (
    <Layout title="HopfenCraft">
        <Container maxW="auto">
            <Title>
                HopfenCraft <Badge>2023</Badge>
            </Title>
            <P>
            This project was so much fun to make 😁!
            I started this project to both learn and showcase my skills in the Java stack, as well as, React.
            I was curious about the Spring Framework and decided to give it a go. As it turns out I really liked it.
            As for the frontend, I wanted to relearn React as it is a very <em>&quot;javascripty&quot;</em> functional oriented framework. 
            I&apos;m really happy with how it turned out, and as a result, this is a project which I&apos;m really proud of!
            Please feel free to fork the project and contribute!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>GitHub</Meta>
                    <Link href="https://github.com/hugorithm/HopfenCraft">
                        https://github.com/hugorithm/HopfenCraft <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>• Windows • macOS • Linux • iOS • Android •</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>• Java • Spring Boot • PostgreSQL • React.js • Redux • Typescript • Paypal API v2 • OAuth2 • Google reCAPTCHA • MaterialUI • Docker • Prometheus • Grafana •</span>
                </ListItem>
            </List>
            <ProjectImage src="/images/projects/hopfencraft.gif" alt="Droobee" />
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 