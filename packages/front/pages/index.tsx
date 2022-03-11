import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";

import { Text } from "@chakra-ui/react";

const IndexPage = () => (
  <div>
    <Heading margin="15" as="h4" size="md" color="#322659">
      <Text as="em">Bienvenido a Topapp, te ayudamos a conciliar</Text>
    </Heading>

    <Stack margin="15" direction="row" spacing={10} align="center">
      <Button borderRadius="md" variant="info" bg="#FAF5FF" color="#6B46C1">
        <Link href="/padres"> Soy padre </Link>
      </Button>
      <Button borderRadius="md" variant="info" bg="#E9D8FD" color="#553C9A">
        <Link href="/nanny">Soy nanny</Link>
      </Button>
      <Button borderRadius="md" variant="info" bg="#D6BCFA" color="#44337A">
        <Link href="/guarderia">Soy guardería</Link>
      </Button>
    </Stack>
  </div>
);

export default IndexPage;
