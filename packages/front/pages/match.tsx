import React from "react";
import Matchs from "../components/MatchList";
import { Heading, Stack, Container, Text, Button } from "@chakra-ui/react";

const ListMatch = () => (
  <Container
    padding="-5"
    maxW="container.sm"
    color="#44337A"
    border="2px"
    borderColor="#322659"
  >
    <Heading margin="15" as="h4" size="md" color="#322659">
      <Text as="em">Contacta con tu match</Text>
    </Heading>

    <Matchs />
  </Container>
);

export default ListMatch;
