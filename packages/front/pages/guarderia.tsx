import React from "react";
import GuarderiaForm from "../components/form/KindergardenForm";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Guarderia = () => (
  <div>
    <Heading margin="15" as="h4" size="md" color="#322659">
      <Text as="em">
        {" "}
        Hola guardería, rellena el siguiente formulario y ayuda a los padres a
        conciliar{" "}
      </Text>
    </Heading>

    <GuarderiaForm />
  </div>
);

export default Guarderia;
<Heading margin="15" as="h4" size="md" color="#322659">
  <Text as="em">
    Hola nanny, rellena el siguiente formulario y empieza a trabajar :)
  </Text>
</Heading>;
