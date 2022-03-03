import React from "react";
import Button from "@mui/material/Button";
import MatchList from "../components/MatchList";

const Match = () => (
  <div>
    <h2>Revisa y elige con quien haces Match </h2>

    <MatchList />

    <Button variant="outlined">Match</Button>
  </div>
);

export default Match;
