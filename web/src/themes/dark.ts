import { extendTheme } from "@chakra-ui/react";
import baseTheme from "./base";

const darkTheme = {
  styles: {
    global: {
      "html, body": {
        background: "linear-gradient(#220135, #190028, #11001c)",
        height: "100vh",
      },
    },
  },
};

export default extendTheme({ ...baseTheme, ...darkTheme });
