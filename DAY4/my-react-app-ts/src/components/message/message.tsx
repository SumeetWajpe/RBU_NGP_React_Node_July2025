import React, { type FC } from "react";

type MessageType = {
  msg: string;
};

const Message: FC<MessageType> = (props: MessageType) => {
  return <h1> {props.msg}!</h1>;
};

export default Message;
