import React from "react";
import NannyForm from "../components/form/NannyForm";
import { Heading } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

const Nanny = () => (
  <div>
    <Heading margin="15" as="h4" size="md" color="#322659">
      <Text as="em">
        Hola nanny, rellena el siguiente formulario y empieza a trabajar :)
      </Text>
    </Heading>

    <NannyForm />
  </div>
);

export default Nanny;
