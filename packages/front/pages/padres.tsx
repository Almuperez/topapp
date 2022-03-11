import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import ButtonLog from "../components/ButtonLog";

const Padre = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <ButtonLog />
    </div>
  );
};

export default Padre;
