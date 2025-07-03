import { useState } from "react";

var Counter = () => {
  const [count, setCount] = useState(100);
  return (
    <div>
      <p>Count : {count} </p>
      <button className="btn btn-primary" onClick={() =>
         setCount(count + 1)}>
        {" "}
        ++{" "}
      </button>
    </div>
  );
};

export default Counter;
