import React from "react";
import { Heading } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Topapp = () => (
  <Container
    maxW="container.sm"
    color="#44337A"
    border="2px"
    borderColor="#322659"
  >
    <Heading margin="5" as="h5" size="md" color="#322659">
      <Text as="em">Información sobre Topapp</Text>
    </Heading>
    Topapp es una aplicación que busca dar solución a tantos padres que
    necesitan con urgencia conciliar su vida personal con laboral o hobbies.
    Pone a su diposición gaurderías y nannies disponibles en su zona.
  </Container>
);

export default Topapp;
