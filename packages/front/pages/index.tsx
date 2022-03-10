import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import styled from "styled-components";
import { Card } from "react-bootstrap";

export const StyleDiv = styled.div`
margin: 0px:
padding: 0px;
font-size: 16px;
font-family: Arial, Helvetica, sans-serif;
`;

const IndexPage = () => (
  <StyleDiv>
    <Card border="info" style={{ width: "40rem" }}>
      <Heading margin="40" as="h4" size="md" color="grey">
        Bienvenido a Topapp, te ayudamos a conciliar
      </Heading>

      <Stack margin="40" direction="row" spacing={50} align="center">
        <Button borderRadius="md" variant="info" bg="pink" color="white">
          <Link href="/padres"> Soy padre </Link>
        </Button>
        <Button borderRadius="md" variant="info" bg="white" color="white">
          <Link href="/nanny">Soy nanny</Link>
        </Button>
        <Button borderRadius="md" bg="white" color="white">
          <Link href="/guarderia">Soy guardería</Link>
        </Button>
      </Stack>
    </Card>
  </StyleDiv>
);

export default IndexPage;
