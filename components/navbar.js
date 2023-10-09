import { forwardRef } from 'react';
import Logo from "./logo";
import NextLink from "next/link";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-loggle-button";
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
    return (
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? '#3d7aed' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#252d3e80')}
            style={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.lg"
                wrap="wrap" align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    display={{ base: 'none', md: 'flex' }}
                    width={{ base: 'nfull', md: 'auto' }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                >
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="https://github.com/hugorithm/cv/blob/master/cv.pdf" path={path}>
                        Curriculum Vitae
                    </LinkItem>
                    <LinkItem href="/masters" path={path}>
                        Master&apos;s Thesis
                    </LinkItem>
                    <LinkItem
                        target="_blank"
                        href="https://github.com/hugorithm"
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4 }}
                        pl={2}
                    >
                        <IoLogoGithub />
                    </LinkItem>
                    <LinkItem
                        href="https://instagram.com/huqoferreira"
                        path={path}>
                        <IoLogoInstagram />
                    </LinkItem>
                    <LinkItem
                        href="https://www.linkedin.com/in/hugoandrefsilva"
                        path={path}>
                        <IoLogoLinkedin />
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">About</MenuItem>
                                <MenuItem as={MenuLink} href="https://github.com/hugorithm/cv/blob/master/cv.pdf">Curriculum Vitae</MenuItem>
                                <MenuItem as={MenuLink} href="/masters">Master&apos;s Thesis</MenuItem>
                                <MenuItem as={MenuLink} href="/projects">Projects</MenuItem>
                                <MenuItem as={MenuLink} href="https://github.com/hugorithm">
                                    <IoLogoGithub />
                                    &nbsp;
                                    GitHub
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://instagram.com/huqoferreira">
                                    <IoLogoInstagram />
                                    &nbsp;
                                    Intagram
                                </MenuItem>
                                <MenuItem as={MenuLink} href="https://www.linkedin.com/in/hugoandrefsilva">
                                    <IoLogoLinkedin />
                                    &nbsp;
                                    LinkedIn
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default Navbar;