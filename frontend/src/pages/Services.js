import {
  Box,
  Heading,
  Text,
  Img,
  Center,
  VStack,
  Stack,
} from "@chakra-ui/react";
import Cook from "../assets/cook.webp";
import Babysitter from "../assets/babysitter.jpeg";
import Maid from "../assets/maid.jpeg";
import Elderly from "../assets/elderly.jpeg";

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
        boxShadow={"6px 6px 0 black"}
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

export default function Services() {
  const Serviceslist = [
    {
      name: "Maid",
      details: "For cleaning and different house chores.",
      imagesrc: Maid,
    },
    {
      name: "Chef/Cook",
      details: "To prepare meals based on the person need.",
      imagesrc: Cook,
    },
    {
      name: "Babysitter",
      details: "To take care of your kids.",
      imagesrc: Babysitter,
    },
    {
      name: "Elderly Care",
      details: "To take care for the elderly persons.",
      imagesrc: Elderly,
    },
  ];
  return (
    <VStack mt={16}>
      <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
        <Text as={"span"}>Services We</Text>{" "}
        <Text color={"#0AC05E"} as={"span"}>
          Offer
        </Text>
      </Heading>
      <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
        What services you want helper for? We have helpers available for your
        different day-to-day service.
      </Text>
      <Stack direction={["column", "row"]} wrap="wrap" justify={"center"}>
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
