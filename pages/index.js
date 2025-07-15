import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  Text,
  chakra,
  List,
  ListItem
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import NextLink from "next/link";
import { MdEmail } from "react-icons/md";
import Terminal from "../components/terminal";



const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Page = () => {
  return (
    <Container maxW='auto'>
      <Terminal></Terminal>
      <Section delay={0.1}>
        <Box display={{ md: 'flex' }} >
          <Box flexGrow={1}>
            <Text mb={3} mt={6} fontFamily={"'Fira Code', monospace"} color={useColorModeValue('hyperBlue', 'hyperGreen')} fontSize={17} fontWeight={800}>Hi, my name is</Text>
            <Heading as="h2" mb={3} fontSize={65} variant="page-title" display="flex" gap={2}>
              Hugo
              <Text color={useColorModeValue('hyperBlue', 'hyperGreen')} w="auto">
                Silva
              </Text>

            </Heading>
            <Heading as="h2" fontSize={30} variant="page-title" display="flex" gap={2}>
              I&apos;m a Software Engineer <strong>@SWISS</strong> 🇨🇭✈️
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 6 }}
            ml={{ md: 6 }}
            mr={{ md: 4 }}
            align="center"
            borderColor={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
            borderWidth={2}
            borderStyle="solid"
            width={200}
            height={200}
            borderRadius={3}
          >
            <ProfileImage className="profile-pic"
              transform={"translate(12px, 12px)"}
              maxWidth="200px"
              display="inline-block"
              borderRadius={3}
              src="/images/hugo.jpg"
              alt="Profile Image"
              filter={"grayscale(1)"}
              mixBlendMode={"luminosity"}
            />
          </Box>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('hyperBlue', 'hyperGreen')}>
          About Me
        </Heading>
        <Paragraph>
          Hi, I&apos;m Hugo! I&apos;m a Software Engineer based in Switzerland 🇨🇭 with a passion for technology.
        </Paragraph>
        <Paragraph>
          I love learning new things and evolving with the projects I participate in. I&apos;m very attentive to the new tendencies and innovations in technology. When offline, I love to play
          piano and hike ⛰️😁
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Box align="center" my={4}>
          <Button as={NextLink} href="mailto:hugofsilv@gmail.com" ml={5} borderWidth={1} borderColor={useColorModeValue("hyperBlue", "hyperGreen")}><MdEmail />&nbsp; Email me!</Button>
        </Box>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('hyperBlue', 'hyperGreen')}>
          Experience & Events
        </Heading>
        <BioSection>
          <BioYear>2019 - May 2024</BioYear>
          Worked at Idryl Technologies as a Software Engineer
        </BioSection>
        <BioSection>
          <BioYear>May 2024 - Now</BioYear>
          Started working as a Software Engineer at SWISS International Air Lines Ltd. 🇨🇭✈️ <br></br>
        </BioSection>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('hyperBlue', 'hyperGreen')}>
          Achievements @SWISS 🇨🇭✈️
        </Heading>
        <BioSection>
          <List>
            <ListItem>• Built and maintained scalable .NET microservices using C#, Docker, K8s and Elastic contributing to increased reliability and maintainability across internal platforms</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• Developed Terraform release pipelines in Azure DevOps, including the setup of a secure service principal with federated credentials and configuration of service connections to enable seamless infrastructure deployments.</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• Enhanced cloud security by implementing private endpoints across all key Azure resources, ensuring internal-only access and reducing exposure to public networks.</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• Designed and developed a scalable LLM service for Retrieval-Augmented Generation (RAG) use cases, supporting multiple projects and models (e.g., GPT-4o, text-embedding-3-large). Integrated with Azure AI Search to enable vector, hybrid, and semantic hybrid search capabilities.</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• Served as Security Champion, driving adoption of secure development practices and overseeing integration of CheckmarxOne and SonarQube into pipelines; Eliminated <strong>100+</strong> critical vulnerabilities in under a <strong>month</strong> and setting a company-wide benchmark as the first and most advanced security adopter 🚀.</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• Designed and contributed to key Architecture Decision Records (ADRs) that guided system design and ensured alignment with technical and business goals.</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• Delivered multiple townhall presentations to an audience of 300+ employees, effectively promoting our team&apos;s achievements and showcasing the platform&apos;s capabilities.</ListItem>
            <ListItem>&nbsp;</ListItem>
            <ListItem>• <strong>1st Place</strong>🥇 at Lufthansa Group Agentic AI Hackathon with a <Link as={NextLink} href="https://www.linkedin.com/posts/hug0silva_im-truly-honored-to-have-been-part-of-the-activity-7326608709718040578-TmAZ"><strong>&quot;RetentionAI Solution&quot;</strong></Link></ListItem>
          </List>
        </BioSection>
      </Section>
      <Section delay={0.6}>
        <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('hyperBlue', 'hyperGreen')}>
          Education
        </Heading>
        <BioSection>
          <BioYear>2014</BioYear>
          English C1 certification
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Completed my Master&apos;s in Engineering and Management of Information Systems
          at University of Minho with a grade of 19 out of 20.&nbsp;

          <Link as={NextLink} href="/masters"><strong>&quot;Management and Analysis Platform for Data Based in Blockchain Technology&quot;</strong></Link>

          <br></br>
          Published the Article&nbsp;

          <Link href="https://doi.org/10.1016/j.procs.2020.03.073"><strong>&quot;Modular Blockchain Implementation in Intensive Medicine&quot;</strong></Link>

        </BioSection>
      </Section>

      <Section delay={0.7}>
        <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('hyperBlue', 'hyperGreen')}>
          Things I ❤
        </Heading>
        <Paragraph>
          Software Engineering 💻, Piano &amp; Sports 🎾
        </Paragraph>
      </Section>
    </Container>
  );
}

export default Page;
export { getServerSideProps } from '../components/chakra'
