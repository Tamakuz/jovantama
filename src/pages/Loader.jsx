import React from "react";
import ParticlesComponent from "../components/Particles";
import { Box, Flex } from "@chakra-ui/react";
import CardWelcome from "../components/Loader/CardWelcome";

const Loader = () => {
  return (
    <Flex className="justify-center">
      <ParticlesComponent />
      <CardWelcome />
    </Flex>
  );
};

export default Loader;
