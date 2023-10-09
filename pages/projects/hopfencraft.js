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
            A Beer E-commerce shop made in Java Spring Boot and React + Redux with Typescript and MaterialUI.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
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
                    <span>• Java • Spring Boot • PostgreSQL • React • Redux • Typescript • Paypal API • OAuth2 • Google reCAPTCHA • MaterialUI •</span>
                </ListItem>
            </List>
            <ProjectImage src="/images/projects/hopfencraft.gif" alt="Droobee" />
        </Container>
    </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 