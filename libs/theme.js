import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: props => ({
    body: {
      bg: mode('#ffffff', '#1a202c')(props)
    },
    "body.chakra-ui-dark p.typewriter": {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: "13px",
      overflow: "hidden",
      borderRight: "8px solid rgb(255, 255, 255)",
      whiteSpace: "nowrap",
      letterSpacing: ".15em",
      maxWidth: "min-content",
      overflow: "hidden",
      animation: "typing 4.5s steps(60, end), blink-caret 1s step-end infinite",
    },
    "body.chakra-ui-light p.typewriter": {
      fontFamily: "JetBrains Mono, monospace",
      fontSize: "13px",
      overflow: "hidden",
      borderRight: "8px solid rgb(53, 53, 53)",
      whiteSpace: "nowrap",
      letterSpacing: ".15em",
      maxWidth: "min-content",
      overflow: "hidden",
      animation: "typing 4.5s steps(60, end), blink-caret-dark 1s step-end infinite",
    },
    "body.chakra-ui-dark::-webkit-scrollbar-thumb, -moz-scrollbar-thumb": {
      backgroundColor: "#364158",
      borderRadius: "8px",
      cursor: "pointer",
    },
    "body.chakra-ui-light::-webkit-scrollbar-thumb, -moz-scrollbar-thumb": {
      backgroundColor: "#3182ce",
      borderRadius: "8px",
      cursor: "pointer",
    },
    "::-webkit-scrollbar, -moz-scrollbar": {
      width: "8px",
      height: "10px",
      cursor: "pointer",
    },
    "body.chakra-ui-dark::-webkit-scrollbar-track, -moz-scrollbar-track": {
      boxShadow: "inset 2 2 6px rgba(0,0,0,.3)",
      WebkitBoxShadow: "inset 2 2 6px rgba(0,0,0,.3)",
      borderRadius: "1px",
      backgroundColor: "#1a202c",
      cursor: "pointer",
    },
    "body.chakra-ui-light::-webkit-scrollbar-track, -moz-scrollbar-track": {
      boxShadow: "inset 2 2 6px rgba(0,0,0,.3)",
      WebkitBoxShadow: "inset 2 2 6px rgba(0,0,0,.3)",
      borderRadius: "1px",
      backgroundColor: "#dee4e7",
      cursor: "pointer",
    },
    ".profile-pic:hover": {
      transform: "translate(5px, 5px)",
      filter: "none",
      mixBlendMode: "unset",
    },
    ".profile-pic": {
      transition: "all 0.3s ease-in-out",
    },
  })
}

const components = {
  Heading: {
    variants: {
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  Link: {
    baseStyle: props => ({
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

const fonts = {
  heading: "'M PLUS Rounded 1c'",
}

const colors = {
  glassTeal: '#88ccca',
  hyperGreen: '#57e296',
  hyperBlue: '#3d7aed'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  config,
  styles,
  components,
  colors,
  fonts
});

export default theme;
