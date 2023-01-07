import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Tag,
  VStack,
} from "@chakra-ui/react";
import logo from "assets/logo.png";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box bg={"gray.50"} color={"gray.700"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Product</ListHeader>
            <Link href={"#"}>Overview</Link>
            <Stack direction={"row"} align={"center"} spacing={2}>
              <Link href={"#"}>Features</Link>
              <Tag size={"sm"} bg={"green.300"} ml={2} color={"white"}>
                New
              </Tag>
            </Stack>
            <Link href={"#"}>Tutorials</Link>
            <Link href={"#"}>Pricing</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Company</ListHeader>
            <Link href={"#"}>About Us</Link>
            <Link href={"#"}>Contact Us</Link>
            <Link href={"#"}>Partners</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Legal</ListHeader>
            <Link href={"#"}>Cookies Policy</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms of Service</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <ListHeader>Follow Us</ListHeader>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <VStack py={10} justify="center">
        <Image src={logo} boxSize="20"></Image>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          © 2022 MaidAid. All rights reserved
        </Text>
      </VStack>
    </Box>
  );
}
