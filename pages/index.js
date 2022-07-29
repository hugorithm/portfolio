import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button,
    Text,
    Divider
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import NextLink from "next/link";
import { MdEmail } from 'react-icons/md';
import { IoDocumentText } from 'react-icons/io5';


const Page = () => {
    return (
        <Container maxW='auto'>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.200', 'whiteAlpha.200')} p={3} mb={6} mt={3} overflow={"hidden"} align="left" border={useColorModeValue('1px solid ', '1px solid #fff')}>
                <Text color={useColorModeValue('#3d7aed', '#57e296')} fontFamily={"'Fira Code', monospace"} letterSpacing=".15rem" fontSize={13}>hugorithm:~$ </Text>
                {/* <Text className="typewriter">Hello! I&apos;m a Software Engineer from Portugal with a passion for technology!</Text> */}
                <Text className="typewriter">sudo ./load-3dmodel.sh -i -p 500</Text>
            </Box>

            <Box display={{ md: 'flex' }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title" display="flex" gap={2}>
                        Hugo
                        <Text color={useColorModeValue('#3d7aed', '#57e296')} w="auto">
                            Silva
                        </Text>

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
                <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('#3d7aed', '#57e296')}>
                    Biography
                </Heading>
                <Paragraph>
                    Hi, I'm Hugo! I'm a Software Engineer from Portugal with a passion for technology.
                    I like to learn and evolve with the projects I participate in while still adding value to the
                    final product and watching the evolution of a prototype, from its initial development phases to a
                    final solution. I'm very attentive to the new tendencies and innovations in technology. When offline, I love to play
                    piano and electric guitar 😁.
                </Paragraph>
            </Section>
            <Section delay={0.1}>
                <Box align="center" my={4}>
                    <NextLink href="/curriculum" passHref>
                        <Button ml={5} colorScheme="teal"><IoDocumentText/>&nbsp; My CV</Button>
                    </NextLink>
                    <NextLink href="mailto:hugofsilv@gmail.com" passHref>
                        <Button ml={5} colorScheme="teal"><MdEmail/>&nbsp; Email me!</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('#3d7aed', '#57e296')}>
                    Experience & Events
                </Heading>
                <BioSection>
                    <BioYear>1997</BioYear>
                    Born in Braga, Portugal.
                </BioSection>
                <BioSection>
                    <BioYear>2019 to Present</BioYear>
                    Started working at Idryl Technologies as a Full-stack Developer
                </BioSection>
                <BioSection>
                    <BioYear>2020</BioYear>
                    Started working on his Master&apos;s Dissertation &nbsp;
                    <NextLink href="/masters" passHref>
                        <Link><strong>"Management and Analysis Platform for Data Based in Blockchain Technology"</strong></Link>
                    </NextLink>
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Completed his Master&apos;s in Engineering and Management of Information Systems
                    at University of Minho with a grade of 19 out of 20
                </BioSection>
            </Section>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('#3d7aed', '#57e296')}>
                    Things I ❤
                </Heading>
                <Paragraph>
                    Software Engineering 💻, Music 🎸🎶, Poetry 📜🖋, Photography 📷, Games 🎮
                </Paragraph>
            </Section>
        </Container>
    );
}

export default Page;