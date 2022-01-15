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
                    Hugo is a full-stack developer from Portugal
                    with a passion for technology. He likes to learn and evolve with the projects he participates in while still adding value to the
                    final product and watching the evolution of a prototype, from its initial development phases to a
                    final solution. He is very attentive to the new tendencies and innovations in technology. When offline he loves to play
                    piano and electric guitar 😁.
                </Paragraph>
            </Section>
            <BioSection>
                <BioYear>1997</BioYear>
                Born in Braga, Portugal.
            </BioSection>
            <BioSection>
                <BioYear>2021</BioYear>
                Completed his Master&apos;s in Engineering and Management of Information Systems
                at University of Minho
            </BioSection>
            <BioSection>
                <BioYear>2019 to present</BioYear>
                Started working at Idryl Technologies
            </BioSection>
        </Container>
    );
}

export default Page;