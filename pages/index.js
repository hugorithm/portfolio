import { 
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue 
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.400', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a software engineer from Portugal!
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Hugo Silva
                    </Heading>
                    <p>Software Engineer 💻</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image 
                        borderColor="whiteAlpha.800" 
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/hugo.jpg"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <Paragraph>
                    Hi, I'm Hugo! I'm a Software Engineer from Portugal with a passion for technology.
                    I like to learn and evolve with the projects I participate in while still adding value to the
                    final product and watching the evolution of a prototype, from its initial development phases to a
                    final solution. I'm very attentive to the new tendencies and innovations in technology. When offline, I love to play
                    piano and electric guitar 😁.
                </Paragraph>
            </Section>
            <BioSection>
                <BioYear>1997</BioYear>
                Born in Braga, Portugal.
            </BioSection>
            <BioSection>
                <BioYear>2019 to present</BioYear>
                Started working at Idryl Technologies as a full-stack developer
            </BioSection>
            <BioSection>
                <BioYear>2020</BioYear>
                Started working on his Master&apos;s Dissertation <strong>"Management and Analysis Platform for Data Based in Blockchain Technology"</strong>
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed his Master&apos;s in Engineering and Management of Information Systems
                at University of Minho
            </BioSection>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    CV
                </Heading>
                <Paragraph>
                    My CV 😄
                </Paragraph>
                
            </Section>
        </Container>
    );
}

export default Page;