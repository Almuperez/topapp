//añadimos este import para que next no nos de problemas
import React from "react";
import Button from "@mui/material/Button";

const IndexPage = () => (
  <div>
    <h2>Bienvenido a Topapp, te ayudamos a conciliar</h2>

    <Button variant="contained" color="primary" href="/padres">
      Soy padre
    </Button>
    <Button variant="contained" color="secondary" href="/nanny">
      Soy niñera
    </Button>
    <Button variant="contained" color="success" href="/guarderia">
      Soy guardería
    </Button>

    {/* <img
      alt=""
      src="https://img.remediosdigitales.com/2605b3/colegio/450_1000.jpg"
    /> */}
  </div>
);

export default IndexPage;
