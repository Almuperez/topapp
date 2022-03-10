import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Button from "@mui/material/Button";
import ButtonLog from "../components/ButtonLog";

const Padre = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <ButtonLog />
      <Button variant="contained" color="primary" href="/listNannies">
        Buscar Nanny
      </Button>
      <Button variant="contained" color="primary" href="/listKindergarden">
        Buscar Kindergarden
      </Button>
    </div>
  );
};

export default Padre;
