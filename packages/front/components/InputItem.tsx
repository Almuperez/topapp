import React, { useState } from "react";

const InputItem = () => {
  const [match, setmacth] = useState("padre");
  const handleAddItem = () => {
    console.log("Adding item");
  };

  return (
    <div>
      {/* El valor del input  pasa a ser un componente controlado */}
      <input value={match} placeholder="match" />
      <button onClick={handleAddItem} type="button">
        {" "}
        match{" "}
      </button>
    </div>
  );
};

export default InputItem;
