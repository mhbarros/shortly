import React, { FormEvent, useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Stars from "../components/Stars";
import { ShortApi } from "../services/ShortApi";

function Home() {
  const [url, setUrl] = useState<string>("");
  const [shortedUrl, setShortedUrl] = useState<string>("");

  const urlInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!urlInput.current) return;

    urlInput.current.focus();
  }, []);

  const doShortUrl = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const shorted = await ShortApi.short(url);
      setShortedUrl(shorted.short);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Stars />
      <Container pt={12} maxW={"container.lg"}>
        <Flex justifyContent={"center"}>
          <Heading color={"white"}>ShortLy🔗</Heading>
        </Flex>
        <Flex
          bg={"white"}
          w={"100%"}
          h={"400px"}
          borderRadius={"20px"}
          mt={20}
          p={{ base: 4, lg: 8 }}
          flexDirection={"column"}
        >
          <Heading textAlign={"center"}>Short URLs to make-it simple.</Heading>

          <Box mt={24}>
            <form onSubmit={doShortUrl} style={{ width: "100%" }}>
              <Flex flexDirection={{ base: "column", lg: "row" }}>
                <Input
                  ref={urlInput}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder={"https://yourwebsite.com"}
                  w={"100%"}
                  me={{ lg: 1 }}
                  type={"url"}
                />
                <Button
                  type={"submit"}
                  colorScheme={"purple"}
                  variant={"solid"}
                  ms={{ lg: 1 }}
                  mt={{ base: 5, lg: 0 }}
                >
                  Short it!
                </Button>
              </Flex>
              {shortedUrl && (
                <Flex justifyContent={"center"}>
                  <Box
                    backgroundColor={"#cdcdcd"}
                    mt={{ base: 8, lg: 16 }}
                    w={"500px"}
                    p={{ base: 2, sm: 4 }}
                    borderRadius={12}
                    textAlign={"center"}
                  >
                    <Text fontSize={{ base: "14px", sm: "16px" }}>
                      {shortedUrl}
                    </Text>
                  </Box>
                </Flex>
              )}
            </form>
          </Box>
        </Flex>
      </Container>
    </>
  );
}

export default Home;
