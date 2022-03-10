import React from "react";
import Button from "@mui/material/Button";
import Kindergardens from "../components/KindergardenList";

const ListKindergardens = () => (
  <div>
    <h2>Revisa y elige con quien haces Match </h2>
    <Kindergardens />

    <Button variant="outlined">Match</Button>
  </div>
);

export default ListKindergardens;
