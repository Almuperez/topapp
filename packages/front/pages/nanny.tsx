import React from "react";
import NannyForm from "../components/form/NannyForm";
import InputItem from "../components/InputItem";
import MatchList from "../components/List";

const Nanny = () => (
  <div>
    <h2>
      Hola nanny, rellena el siguiente formulario y empieza a trabajar :){" "}
    </h2>

    <NannyForm />
    <MatchList />
  </div>
);

export default Nanny;
