import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/ChatSlice";
import { GenerateRandomName } from "./constant";
import { newMessage } from "./constant";

const Livechat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message);

  useEffect(() => {
    const inter = setInterval(() => {
      // console.log("Api polling");
      dispatch(
        addMessage({
          name: GenerateRandomName(),
          message: newMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(inter);
  }, []);

  return (
    <>
      <h1 className="text-center font-semibold">Live Chat</h1>
      <div className="bg-white col-span-full p-2 m-2 rounded-xl h-[450px] overflow-y-scroll border border-black">
        {chatMessage.map((item, index) => (
          <ChatMessage key={index} name={item.name} message={item.message} />
        ))}
      </div>
      <form
        className="px-2"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Rudendru ",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="border border-black w-80 rounded-md px-3 py-1 mx-2"
          type="text"
          placeholder="type your message here..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-3 py-1 rounded-md bg-slate-700">send</button>
      </form>
    </>
  );
};

export default Livechat;
