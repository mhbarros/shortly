import { extendTheme } from "@chakra-ui/react";
import baseTheme from "./base";

const lightTheme = {
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#f8f9fa",
      },
    },
  },
};

export default extendTheme({ ...baseTheme, ...lightTheme });
