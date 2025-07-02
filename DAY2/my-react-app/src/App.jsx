import React from "react";
import "./App.css";
import Message from "./message";

class App extends React.Component {
  render() {
    var messageOne = { msg: "Hello", from: "Peter", to: "Parker" };

    return (
      <div>
        <Message msgdetails={messageOne} />
        {/* <Message msg="Hey" from="John" to="Carter" />
        <Message msg="Hi" from="James" to="Bond" /> */}
      </div>
    );
  }
}

export default App;
