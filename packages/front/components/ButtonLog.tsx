import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import ParentForm from "./form/ParentForm";
import { Heading, Stack, Container, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const ButtonNav = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <Heading margin="15" as="h4" size="md" color="#322659">
        <Text as="em">Soy padre y busco conciliar</Text>
      </Heading>
      {!user && (
        <a
          style={{ margin: "5px" }}
          href="/api/auth/login"
          className="btn btn-primary"
        >
          Login
        </a>
      )}

      {user && (
        <>
          <Container
            padding={50}
            maxW="container.sm"
            color="#44337A"
            border="2px"
            borderColor="#322659"
          >
            <ParentForm />
          </Container>
          <Stack
            margin="50"
            padding={100}
            direction="row"
            spacing={50}
            align="center"
          >
            <Button borderRadius="md" variant="info" bg="#553C9A" color="white">
              <Link href="/child"> Rellena formulario hijo</Link>
            </Button>

            <Button
              borderRadius="md"
              variant="info"
              bg="#E9D8FD"
              color="#553C9A"
            >
              <Link href="/listNannies"> Buscar nanny </Link>
            </Button>
            <Button
              borderRadius="md"
              variant="info"
              bg="#D6BCFA"
              color="#44337A"
            >
              <Link href="/listKindergarden">Buscar guardería</Link>
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
};
export default ButtonNav;
