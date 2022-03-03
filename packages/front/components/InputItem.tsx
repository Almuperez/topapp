import React, { useState } from "react";

const InputItem = () => {
  const [parent, setParent] = useState("padre");
  const handleAddItem = () => {
    console.log("Adding item");
  };

  return (
    <div>
      {/* El valor del input es lo que valga parent */}
      <input value={parent} placeholder="Parents" />
      <button onClick={handleAddItem} type="button">
        {" "}
        Add item{" "}
      </button>
    </div>
  );
};

export default InputItem;
