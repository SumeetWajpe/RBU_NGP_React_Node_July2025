import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Message from "./components/message/message";

function App() {
  const [count, setCount] = useState<number>(100);

  let messageOne = 
  { msg: "Hey",
     from:
     "John", 
     to: "Carter" };
  return (
    <>
      {/* <Message  xyz="kdhksjdhsjdh" /> */} {/* Error */}
      {/* <Message  msg={10000} /> */} {/* Error */}
      <Message 
      messagedetails={messageOne} />
    </>
  );
}

export default App;
