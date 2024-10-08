import React from "react";
import { ConditionalRendering } from "./ConditionalRendering";

export function GlavnaKomponenta() {
  const number = 20;
  return (
    <>
      <h1>Prognoza za danas:</h1>
      <ConditionalRendering number={number} />
    </>
  );
}
