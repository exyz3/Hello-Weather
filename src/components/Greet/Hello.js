import React from "react";
import Goodbye from "./Goodbye";

export function Greetings() {
  return <h1>Hello!</h1>;
}

export default function Hello(props) {
  const isHello = props.isHello;
  return <>{isHello ? <Greetings /> : <Goodbye />}</>;
}
