import React, { useState } from "react";
import { Forecast } from "../Weather";

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
        placeholder="Enter weather prediction"
      />
      <Forecast isNumber={number} />
    </div>
  );
};

export default ActiveForecast;
