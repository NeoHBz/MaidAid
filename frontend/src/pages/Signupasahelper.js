import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Checkbox,
} from "@chakra-ui/react";

export default function Signupasahelper() {
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up as a Helper
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            We are delighted to have you on board! Please fill out the details
            below so that we can get in touch with you soon!
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="contact" isRequired>
              <FormLabel>Contact no.</FormLabel>
              <Input type={"tel"} />
            </FormControl>
            <FormControl id="location" isRequired>
              <FormLabel>Location</FormLabel>
              <Input type={"text"} />
            </FormControl>
            <FormControl id="pincode" isRequired>
              <FormLabel>Pincode</FormLabel>
              <Input type={"text"} />
            </FormControl>
            <FormControl id="pincode" isRequired>
              <FormLabel>Specialisation</FormLabel>
              <Stack direction={"row"}>
                <Checkbox value="maid">Maid</Checkbox>
                <Checkbox value="cook">Cook</Checkbox>
                <Checkbox value="babysitter">Babysitter</Checkbox>
                <Checkbox value="elderlycare">Elderly Care</Checkbox>
              </Stack>
            </FormControl>
            <FormControl id="message">
              <FormLabel>Message</FormLabel>
              <InputGroup>
                <Input type="text" />
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"#0AC05E"}
                color={"white"}
                _hover={{
                  bg: "#0AC05E",
                }}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
