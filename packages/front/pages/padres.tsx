import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Button from "@mui/material/Button";
import ParentForm from "../components/form/ParentForm";
import ButtonLog from "../components/ButtonLog";

const Padre = () => {
  const { user } = useUser();
  console.log(user);

  return (
    <div>
      <ButtonLog />
      {/* <h2>Soy padre y busco conciliar</h2>
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
          <ParentForm />
          <div>
            <a
              style={{ margin: "5px" }}
              href="/child"
              className="btn btn-primary"
            >
              Rellenar formulario hijo
            </a>
          </div>
          <div>
            <Button variant="contained" color="primary" href="/list">
              Ir a tu lista
            </Button>
          </div>
        </>
      )} */}
    </div>
  );
};

export default Padre;
