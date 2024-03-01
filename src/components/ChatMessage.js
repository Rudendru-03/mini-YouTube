import React from "react";
import { profile_icon } from "./constant";

const ChatMessage = (props) => {
  const { name, message } = props;
  return (
    <div className="flex items-center">
      <img className="w-10 h-10 p-1" src={profile_icon} alt="profile" />
      <span className="px-2 font-semibold">{name} </span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
