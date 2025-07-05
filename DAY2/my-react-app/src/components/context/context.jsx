import React from "react";
import { useContext } from "react";
import { useState } from "react";

const CounterContext = React.createContext(0);

function GrandParent() {
  const [count] = useState(100);
  return (
    <CounterContext.Provider value={count}>
      <h2>Grand Parent</h2>
      <Parent />
    </CounterContext.Provider>
  );
}

function Parent() {
  return (
    <div>
      <h3> Parent</h3>
      <Child />
      <AnotherChild />
    </div>
  );
}

function AnotherChild() {
  const ctx = useContext(CounterContext); // COnsumer

  return (
    <>
      <h4> Another Child</h4>
      <p>Count : {ctx} </p>
    </>
  );
}
function Child() {
  const ctx = useContext(CounterContext); // COnsumer
  return (
    <div>
      <h4> Child</h4>
      <p> Count : {ctx}</p>
    </div>
  );
}

export default GrandParent;
