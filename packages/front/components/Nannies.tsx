// TRAERME FUNCION GETNANNIES
// USE EFFECT
import React, { useState, useEffect } from "react";
import { getNannies } from "../lib/api";
import Item from "./Item";

const Nannies = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    getNannies()
      .then((nannies) => {
        console.log("nannies ===>", typeof nannies, Array.isArray(nannies));
        setNannies(nannies);
      })
      .catch((err) => {
        console.log("error ==>", err);
      });
  }, []);

  return (
    <div>
      <p>TENEMOS UN TOTAL DE {nannies.length}</p>
      {nannies.map((nanny) => {
        console.log("one nanny ==>", nanny);
        return <Item name={nanny.name} price={nanny.priceHour} />;
      })}
    </div>
  );
};

export default Nannies;
