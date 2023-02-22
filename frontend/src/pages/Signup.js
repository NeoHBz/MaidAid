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
} from "@chakra-ui/react";
<<<<<<< HEAD

export default function Signup() {
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
            Sign up as a User
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
                  bg: "green.300",
                }}
              >
                Submit
              </Button>
            </Stack>
=======
import { useState } from "react";
import { GrView, GrHide } from "react-icons/gr";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [errormsg, setErrormsg] = useState("");
  const handleSubmission = () => {
    if (!values.firstname || !values.email || !values.password) {
      setErrormsg("Please fill all required fields");
      return;
    }
    setErrormsg("");

    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.firstname + " " + values.lastname,
        });
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        setErrormsg(err.message);
      });

    console.log(values);
  };
  return (
    <div>
      <Flex minH={"100vh"} align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Sign up as a User
            </Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              We are delighted to have you on board! Please fill out the details
              below so that we can get in touch with you soon!
            </Text>
>>>>>>> 25b24af0e27b74b17d8059106f969bba01bdaa10
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
                    <Input
                      type="text"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          firstname: event.target.value,
                        }))
                      }
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      type="text"
                      onChange={(event) =>
                        setValues((prev) => ({
                          ...prev,
                          lastname: event.target.value,
                        }))
                      }
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(event) =>
                    setValues((prev) => ({
                      ...prev,
                      email: event.target.value,
                    }))
                  }
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        password: event.target.value,
                      }))
                    }
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <GrView /> : <GrHide />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Text fontWeight="bold" color="red">
                {errormsg}
              </Text>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"#0AC05E"}
                  color={"white"}
                  _hover={{
                    bg: "green.300",
                  }}
                  onClick={handleSubmission}
                >
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link to="/login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </div>
  );
}
