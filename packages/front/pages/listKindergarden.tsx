import React from "react";
import Kindergardens from "../components/KindergardenList";
import { Heading, Text } from "@chakra-ui/react";

const ListKindergardens = () => (
  <div>
    <Heading margin="15" as="h4" size="md" color="#322659">
      <Text as="em">Revisa y elige con quien haces Match</Text>
    </Heading>
    {/* <Kindergardens /> */}
  </div>
);

export default ListKindergardens;
