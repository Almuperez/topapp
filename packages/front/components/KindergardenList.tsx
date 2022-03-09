import React, { useState, useEffect } from "react";
import { getKindergardens } from "../lib/api";

import ItemKindergarden from "./ItemKindergarden";

const Kindergardens = () => {
  const [kindergardens, setKindergardens] = useState([]);

  useEffect(() => {
    getKindergardens()
      .then((kindergardens) => {
        setKindergardens(kindergardens);
      })
      .catch((err) => {
        console.log("error ==>", err);
      });
  }, []);

  return (
    <div>
      <p>TENEMOS UN TOTAL DE {kindergardens.length} GUARDERIAS</p>
      {kindergardens.map((kindergarden) => {
        return (
          <ItemKindergarden
            name={kindergarden.name}
            openTime={kindergarden.openTime}
            closeTime={kindergarden.closeTime}
            priceMonth={kindergarden.pricemonth}
            classInfo={kindergarden.classInfo}
            comedor={kindergarden.comedor}
            phone={kindergarden.phone}
            email={kindergarden.email}
            capacity={kindergarden.capacity}
          />
        );
      })}
    </div>
  );
};

export default Kindergardens;
