import React, { useState } from "react";
import { PoP } from "../Weather";

const ActiveForecast = () => {
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={handleChange}
        placeholder="Enter a number"
      />
      <PoP isNumber={number} />
    </div>
  );
};

export default ActiveForecast;
