import React from "react";

import { ChakraProvider } from "@chakra-ui/react";

import darkTheme from "./themes/dark";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider theme={darkTheme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
