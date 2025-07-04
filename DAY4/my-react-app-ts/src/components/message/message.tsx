import React, { type FC } from "react";

type MessageModel = {
  msg: string;
  from: string;
  to: string;
};

type MessageType = {
  messagedetails: MessageModel;
};

const Message: FC<MessageType> = (props: MessageType) => {
  return <h1> {props.messagedetails.msg}!</h1>;
};

export default Message;
