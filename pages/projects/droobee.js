import {
  Container,
  Badge,
  Link,
  List,
  ListItem
} from '@chakra-ui/react'
import { ExternalLinkIcon } from 'react-icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/article';

const Project = () => (
  <Layout title="Droobee">
    <Container maxW="auto">
      <Title>
        Droobee <Badge>2022</Badge>
      </Title>
      <P>
        A Music Bot for Discord, that supports queues, playlists and multiple Guilds!
        This project started from the necessity of having a dedicated music bot for discord.
        Many bots didn&apos;t have the functionality and speed desired, so I saw the opportunity to create a bot
        that not only is fast, but offers many functionalities for everyone to enjoy.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/hugorithm/Droobee">
            https://github.com/hugorithm/Droobee <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>• Windows • macOS • Linux • iOS • Android •</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>• NodeJS • TypeScript • DiscordAPI • Discord.js •</span>
        </ListItem>
      </List>
      <ProjectImage src="/images/projects/droobee.png" alt="Droobee" />
    </Container>
  </Layout>
)

export default Project
export { getServerSideProps } from '../../components/chakra';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 