import { Box, Code, Heading, Highlight, Text } from "@chakra-ui/react";

export const Intro = () => {
  return (
    <>
      <Box>
        <Heading size="5xl" letterSpacing={"tight"}>
          <Highlight
            query={["lightweight", "proxy"]}
            styles={{ color: "teal.600" }}
            matchAll={true}
          >
            A modern lightweight cors proxy
          </Highlight>
        </Heading>
        <Text>
          Having CORS issues and don't want to build your own proxy to dispatch
          requests from your frontend? Say no more, liteproxy fully built with
          golang will proxy any https request to the place you want it to go
          instantly
        </Text>
      </Box>
      <Box mt={20}>
        <Text>How to use?</Text>
        <Text>
          Base Path: <Code>https://api.liteproxy.collinkleest.com/proxy</Code>

          
        </Text>
        <Text>
        Add the <Code>?url</Code> query parameter
        </Text>

        <Text>
        Pass in your desired api endpoint <Code>https://api.liteproxy.collinkleest.com/proxy?url=https://jsonplaceholder.typicode.com/comments?postId=1</Code>
        </Text>

        <Text>Note: this only works with <Code>GET, OPTIONS</Code> requests as of now</Text>
        <Text>Also all responses are cached within a redis cache for 15 minutes</Text>
      </Box>
    </>
  );
};
