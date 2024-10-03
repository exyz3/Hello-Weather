import React from "react";
import Goodbye from "./Goodbye";

function Hello() {
  return <h1>Hello!</h1>;
}

export default function Greetings(props) {
  const isHello = props.isHello;
  return <>{isHello ? Hello : <Goodbye />}</>;
}
