import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Stack } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import ButtonLog from "../components/ButtonLog";
import Link from "next/link";

const Padre = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <ButtonLog />
      <Stack direction="row" spacing={50} align="center">
        <Button borderRadius="md" variant="outline" bg="pink" color="white">
          <Link href="/ListNannies"> Buscar nanny </Link>
        </Button>
        <Button borderRadius="md" variant="outline" bg="white" color="white">
          <Link href="/ListKindergarden">Buscar guardería</Link>
        </Button>
      </Stack>
    </div>
  );
};

export default Padre;
