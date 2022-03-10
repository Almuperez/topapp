import React from "react";
import Button from "@mui/material/Button";
import Kindergardens from "../components/KindergardenList";
import { Card } from "react-bootstrap";
import { Heading } from "@chakra-ui/react";

const ListKindergardens = () => (
  <div>
    {/* <Heading margin="40" as="h4" size="md" color="grey">
      Revisa y elige con quien haces Match
    </Heading> */}
    <Kindergardens />
    <Button variant="outlined">Match</Button>
  </div>
);

export default ListKindergardens;
