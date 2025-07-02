// create a Message component that displays Hello in h1 tag
import React from "react";

class Message extends React.Component {
  render() {
    return (
      <div>
        <h1> {this.props.msgdetails.msg}</h1>
        <p>From : {this.props.msgdetails.from}</p>
        <p>To :{this.props.msgdetails.to} </p>
      </div>
    );
  }
}

export default Message;
