import React from "react";
import Button from "@mui/material/Button";
import List from "../components/List";

const MyList = () => (
  <div>
    <h2>Revisa y elige con quien haces Match </h2>

    <List />

    <Button variant="outlined">Match</Button>
  </div>
);

export default MyList;
