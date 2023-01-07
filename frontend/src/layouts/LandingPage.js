import React from "react";
import { VStack } from "@chakra-ui/react";
import Main from "../components/Home/Main";
import Howitworks from "../components/Home/Howitworks";
import Testimonials from "../components/Home/Testimonials";
import Whychooseus from "../components/Home/Whychooseus";

export default function LandingPage() {
  return (
    <VStack spacing={16}>
      <Main />
      <Howitworks />
      <Testimonials />
      <Whychooseus />
    </VStack>
  );
}
