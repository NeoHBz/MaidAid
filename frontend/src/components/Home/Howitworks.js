import {
  Text,
  Stack,
  VStack,
  Heading,
  Spacer,
  Box,
  Center,
  Img,
} from "@chakra-ui/react";
//need to correct this path
import { ReactComponent as Worksvg } from "/Users/janvi/Desktop/maidaid/frontend/src/assets/work.svg";
import { ReactComponent as Hiresvg } from "/Users/janvi/Desktop/maidaid/frontend/src/assets/hire.svg";

const ServicesCard = (props) => {
  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow="3px 3px 0 black"
      >
        <Box h={"200px"} borderBottom={"1px"} borderColor="black">
          <Img
            src={props.imagesrc}
            roundedTop={"sm"}
            objectFit="contain"
            h="full"
            w="full"
            alt={"Blog Image"}
          />
        </Box>
        <Box p={4} textAlign="center">
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {props.name}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {props.details}
          </Text>
        </Box>
      </Box>
    </Center>
  );
};

export default function Howitworks() {
  const Serviceslist = [
    {
      name: "Hire a Worker",
      details: "Book our certified and reliable workers.",
      imagesrc:
        "https://media-exp1.licdn.com/dms/image/C4E12AQHJzOaz4oo05Q/article-cover_image-shrink_720_1280/0/1619124189636?e=2147483647&v=beta&t=wpV5Yi8f-Bg1eKSKufyu9DJaK-XOVQQhUZe-SATDJs4",
    },
    {
      name: "Refer a Worker",
      details: "Help the workers around you, refer them and get rewards.",
      imagesrc:
        "https://www.openspace.ai/wp-content/uploads/2022/02/OpenSpace-2-construction-workers.jpg",
    },
    {
      name: "Register as a Worker",
      details: "Join us as a worker by filling your contact details.",
      imagesrc:
        "https://www.ishn.com/ext/resources/Issues/2020/10-October/Editorial-comments.jpg?1602694189",
    },
  ];
  return (
    <VStack height="max-content" p={16}>
      <Heading
        fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
        color={"#0AC05E"}
      >
        How it works?
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
        Choosing your desired service or choosing your desired worker was never
        this simple.
      </Text>
      <Stack direction={["column", "row"]} textAlign="center">
        <VStack w={["100%", "50%"]} p={4} justifyContent="center">
          <Worksvg height={"40vh"} width={"40%"} />
          <Heading>Become Helper and Join us.</Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Are you looking for a job in the field of our services? Join our
            team by filling your details and we will soon contact you back.
          </Text>
        </VStack>
        <Spacer />
        <VStack w={["100%", "50%"]} p={4} justifyContent="center">
          <Hiresvg height={"40vh"} width="70%" />
          <Heading>Hire our helpers and workers.</Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Book our verified helpers for home, for business and get your works
            done.
          </Text>
        </VStack>
      </Stack>
      <Stack direction={["column", "row"]}>
        {Serviceslist.map((items, key) => {
          return (
            <ServicesCard
              name={items.name}
              details={items.details}
              imagesrc={items.imagesrc}
              key={key}
            />
          );
        })}
      </Stack>
    </VStack>
  );
}
