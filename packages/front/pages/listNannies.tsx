import React from "react";
import Button from "@mui/material/Button";

import Nannies from "../components/NanniesList";

const ListNannies = () => (
  <div>
    <h2>Revisa y elige con quien haces Match </h2>

    {/* <List /> */}
    <Nannies />
    {/* 
    <Button variant="outlined">Match</Button> */}
  </div>
);

export default ListNannies;
