// create a Message component that displays Hello in h1 tag
import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.msg}</h1>
        <p>From : {this.props.from}</p>
        <p>To :{this.props.to} </p>
      </div>
    );
  }
}

export default Message;
