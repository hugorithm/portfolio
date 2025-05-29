import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "react-icons";

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label="Toggle Dark/Light mode"
      colorScheme={useColorModeValue('blue', 'green')}
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      onClick={toggleColorMode}
    >
    </IconButton>
  )

}

export default ThemeToggleButton;