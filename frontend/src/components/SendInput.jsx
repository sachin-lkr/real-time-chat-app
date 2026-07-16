import React from "react";
import { IoMdSend } from "react-icons/io";

function SendInput() {
  return (
    <div className="max-w-full bg-gray-600 rounded-md flex justify-between mb-5 mr-1 border  ">
      <input
        type="text"
        placeholder="Send a message..."
        className="flex-1 border-none outline-none pl-2 py-1.5 text-white"
      />
      <button type="submit" className=" cursor-pointer ">
        <IoMdSend className="size-5 mr-2 " />
      </button>
    </div>
  );
}

export default SendInput;
