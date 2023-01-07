import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import frontpng from "assets/front.jpeg";

export default function Main() {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({
                  base: "20%",
                  md: "30%",
                }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "#0AC05E",
                zIndex: -1,
              }}
            >
              Are you looking for
            </Text>
            <br />{" "}
            <Text color={"#0AC05E"} as={"span"}>
              Reliable Helpers?
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Have never hired a maid-servant service before? No problem MaidAid
            is a one stop solution where we provide well trained workers for day
            to day service.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              as={"a"}
              href={"/helpers"}
              rounded={"full"}
              bg={"#0AC05E"}
              color={"white"}
              _hover={{
                bg: "#0AC05E",
              }}
            >
              Find Helpers
            </Button>
            <Button rounded={"full"} as={"a"} href={"/contact"}>
              Join our team
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} p={[0, 4, 16]}>
        <Image alt={"Helper Image"} objectFit={"cover"} src={frontpng} />
      </Flex>
    </Stack>
  );
}
