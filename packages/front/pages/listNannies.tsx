import React from "react";

import Nannies from "../components/NanniesList";
import { Heading, Stack, Container, Text, Button } from "@chakra-ui/react";

const ListNannies = () => (
  <div>
    <Heading margin="15" as="h4" size="md" color="#322659">
      <Text as="em"> Bienvenido a Topapp, te ayudamos a conciliar </Text>
    </Heading>

    <Nannies />
  </div>
);

export default ListNannies;
