import React from "react";

export function useCounter() {
  const [counter, setCounter] = React.useState(0);

  return {
    counter,
    setCounter,
  };
}
