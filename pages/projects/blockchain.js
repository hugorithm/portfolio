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

const Work = () => (
    <Layout title="Droobee">
        <Container maxW="auto">
            <Title>
                Blockchain Solution for Healthcare Data Tracking <Badge>2020</Badge>
            </Title>
            <P>
            This is the project that I chose for my Master's Dissertation.
            It is a Blockchain Network based on Hyperledger Fabric that is used to track Healthcare data.
            It integrates a Web API in Node.js for asset creation, modification and has support for asset querying, as well as,
            various Blockchain monitoring software: Blockchain Explorer, Hyperledger Caliper, Prometheus and Grafana.
            It started at the Hospital of S. João in Oporto, where there were clear issues regarding data immutability and veracity.
            This project uses Blockchain Technology to ensure a tamper-proof, immutable, controlled, and secured way of storing 
            data in order to achieve healthcare data veracity, privacy, and reliability.
            You can check how I built this <Link href="/documents/Master_Thesis.pdf">here!</Link>

            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://github.com/hugorithm/">
                        https://github.com/hugorithm/ <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>• Linux • macOS • Windows •</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>• GoLang • Node.js • Docker • Hyperledger Fabric • Python • CouchDB •</span>
                </ListItem>
            </List>
            <ProjectImage src="/images/projects/blockchain.png" alt="Blockchain" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        