import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

function Message({ message }) {
  const { authUser, selectedUser } = useSelector((store) => store.user);
  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const isMyMessage = authUser?._id === message?.senderId;
  return (
    <div
      ref={scroll}
      className={`flex items-end gap-2.5 ${
        isMyMessage ? "justify-end" : "justify-start"
      }`}
    >
      {/* Receiver Avatar */}
      {!isMyMessage && (
        <img
          src={selectedUser?.profileimage}
          alt="receiver avatar"
          className="w-8 h-8 rounded-full object-cover mb-1 border border-slate-700"
        />
      )}

      {/* Message Bubble Container */}
      <div
        className={`flex flex-col max-w-md ${isMyMessage ? "items-end" : "items-start"}`}
      >
        <div
          className={`px-4 py-2.5 rounded-2xl text-sm shadow-md leading-relaxed ${
            isMyMessage
              ? "bg-cyan-600 text-white rounded-br-xs"
              : "bg-slate-800 text-slate-200 border border-slate-700/60 rounded-bl-xs"
          }`}
        >
          {message?.message}
        </div>
        <span className="text-[10px] text-slate-500 mt-1 px-1">
          {new Date(message.createdAt).toLocaleTimeString("en-IN", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          })}
        </span>
      </div>

      {/* Sender Avatar */}
      {isMyMessage && (
        <img
          src={authUser?.profileimage}
          alt="sender avatar"
          className="w-8 h-8 rounded-full object-cover mb-1 border border-cyan-500/40"
        />
      )}
    </div>
  );
}

export default Message;
