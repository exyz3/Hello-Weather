import React from "react";

export function ConditionalRendering(props) {
  const number = props.number;

  if (number < 50) {
    return <p>Danas ce biti lijep dan</p>;
  } else if (number > 50) {
    return <p>Danas ce biti kišni dan</p>;
  } else {
    return null;
  }
}
