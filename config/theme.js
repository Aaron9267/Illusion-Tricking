import { extendTheme } from "@chakra-ui/react";
import "@fontsource/titan-one"

const theme = extendTheme({ 
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts:{
    body: `'titan one'`,
  }, 
});

export default theme;