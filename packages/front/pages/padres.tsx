import React from "react";
import ChildForm from "../components/form/ChildForm";
import ParentForm from "../components/form/ParentForm";

const Padre = () => (
  <div>
    <h2>Soy padre y busco conciliar</h2>
    <ParentForm />
    <ChildForm />
  </div>
);

export default Padre;
