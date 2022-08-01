import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    AspectRatio
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
    <Layout title="Droobee">
        <Container maxW="auto">
            <Title>
                Droobee <Badge>2022</Badge>
            </Title>
            <P>
                A Music Bot for Discord, that supports queues, playlists and multiple Guilds!
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://github.com/hugorithm/Droobee">
                        https://github.com/hugorithm/Droobee <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows / macOS / Linux / iOS / Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>NodeJS, TypeScript, DiscordAPI, Discord.js</span>
                </ListItem>
            </List>
            <ProjectImage src="/images/projects/droobee.png" alt="Droobee" />
        </Container>
    </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'