import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./components/message/message";

function App() {
  const [count, setCount] = useState<number>(100);

  return (
    <>
      <Message msg={10000} />
    </>
  );
}

export default App;
