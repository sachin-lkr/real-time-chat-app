import React from "react";
import Message from "./Message";
import useGetMessages from "../hooks/useGetMessages";
import { useSelector } from "react-redux";

function Messages() {
  useGetMessages();
  const {messages} = useSelector(store=>store.message);
  if(!messages) return;
  return (
    <div className="p-4 overflow-y-auto text-white ">
      {
        messages?.map((messages)=>{
          return(
            <Message key={messages._id} message={messages}/>
          )
        })
      }

    </div>
  );
}

export default Messages;