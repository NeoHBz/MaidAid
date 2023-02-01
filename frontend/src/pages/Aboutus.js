import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";

export default function Aboutus() {
  return (
    <Flex
      w={"full"}
      h={"100vh"}
      backgroundImage={
        "url(https://images.unsplash.com/photo-1567175488465-e585f9f5adf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3456&q=80)"
      }
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
      >
        <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} color="#ffffff">
              Our Story
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"whiteAlpha.800"}>
            {" "}
            Our story begins with local people. In today's era, we have services
            for our every need, be it online food booking or online cab booking.
            We have MaidAid as a employement service to low class people who go
            to search for maid jobs in their locality and come back with no
            hopes.
          </Text>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} color="#ffffff">
              Mission and Vision
            </Text>
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"whiteAlpha.800"}>
            {" "}
            We are a team of dedicated professionals with a passion for
            providing top-quality services. We believe that our customers
            deserve the best, and we are committed to providing them with the
            highest quality services.
            <br /> We are dedicated to building long-term, mutually beneficial
            relationships with our customers, and we work tirelessly to provide
            them with the right helper for their job.
          </Text>

          <Stack direction={"row"}>
            <Button
              as={"a"}
              href={"/helpers"}
              bg={"#0AC05E"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "green.300" }}
            >
              Find Helpers
            </Button>
            <Button
              as={"a"}
              href={"/signupasauser"}
              bg={"whiteAlpha.300"}
              rounded={"full"}
              color={"white"}
              _hover={{ bg: "whiteAlpha.500" }}
            >
              Show more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
