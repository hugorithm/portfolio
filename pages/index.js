import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Link,
    Button,
    Text
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import { BioSection, BioYear } from "../components/bio";
import NextLink from "next/link";
import { MdEmail } from "react-icons/md";
import { IoDocumentText } from "react-icons/io5";
import Terminal from "../components/terminal";


const Page = () => {
    return (
        <Container maxW='auto'>
           <Terminal></Terminal>
            <Section delay={0.1}>
                <Box display={{ md: 'flex' }} >
                    <Box flexGrow={1}>
                        <Text mb={3} mt={6} fontFamily={"'Fira Code', monospace"} color={useColorModeValue('#3d7aed', '#57e296')} fontSize={17} fontWeight={800}>Hi, my name is</Text>
                        <Heading as="h2" mb={3} fontSize={65} variant="page-title" display="flex" gap={2}>
                            Hugo
                            <Text color={useColorModeValue('#3d7aed', '#57e296')} w="auto">
                                Silva
                            </Text>

                        </Heading>
                        <Heading as="h2" fontSize={30} variant="page-title" display="flex" gap={2}>
                            I'm a Software Engineer.
                        </Heading>
                    </Box>
                    <Box
                        flexShrink={0}
                        mt={{ base: 4, md: 6 }}
                        ml={{ md: 6 }}
                        mr={{md: 4 }}
                        align="center"
                        borderColor={useColorModeValue('blackAlpha.800', 'whiteAlpha.800')}
                        borderWidth={2}
                        borderStyle="solid"
                        width={200}
                        height={200}
                        borderRadius={3}
                    >
                        <Image className="profile-pic"
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
                <Heading as="h3" variant="section-title" textDecorationColor={useColorModeValue('#3d7aed', '#57e296')}>
                    About Me
                </Heading>
                <Paragraph>
                    Hi, I'm Hugo! I'm a Software Engineer from Portugal with a passion for technology.
                </Paragraph>
                <Paragraph>
                    I love learning new things and evolving with the projects I participate in. I'm very attentive to the new tendencies and innovations in technology. When offline, I love to play
                    piano and electric guitar 😁
                </Paragraph>
            </Section>
            <Section delay={0.3}>
                <Box align="center" my={4}>
                    <NextLink href="https://github.com/hugorithm/cv/blob/master/HugoSilva_CV.pdf" passHref>
                        <Button borderWidth={1} borderColor={useColorModeValue("#3d7aed", "#57e296")}><IoDocumentText />&nbsp; My CV</Button>
                    </NextLink>
                    <NextLink href="mailto:hugofsilv@gmail.com" passHref>
                        <Button ml={5} borderWidth={1}  borderColor={useColorModeValue("#3d7aed", "#57e296")}><MdEmail />&nbsp; Email me!</Button>
                    </NextLink>
                </Box>
            </Section>
            <Section delay={0.4}>
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
                    Started working on my Master&apos;s Dissertation 
                    <NextLink href="/masters" passHref>
                        <Link><strong>"Management and Analysis Platform for Data Based in Blockchain Technology"</strong></Link>
                    </NextLink>
                    <br></br>
                    Published the Article 
                    <NextLink href="https://doi.org/10.1016/j.procs.2020.03.073" passHref>
                        <Link><strong>"Modular Blockchain Implementation in Intensive Medicine"</strong></Link>
                    </NextLink>
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Completed my Master&apos;s in Engineering and Management of Information Systems
                    at University of Minho with a grade of 19 out of 20
                </BioSection>
            </Section>
            <Section delay={0.5}>
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