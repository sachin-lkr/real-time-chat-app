import React from "react";

import SendInput from "./SendInput";
import Messages from "./Messages";
import { useSelector } from "react-redux";
import store from "../redux/store";

function MessageContainer() {
  const { selectedUser } = useSelector((store) => store.user);
  return (
    <div className="min-w-[450px] h-full flex flex-col min-h-0">
      <div className="flex  items-center gap-5 text-white bg-zinc-800   p-2 cursor-pointer px-4 py-2 mb-2">
        <div className="avatar avatar-online  ">
          <div className="w-10 rounded-full ring-2 ring-amber-100">
            <img
              src={selectedUser?.profileimage}
              alt="avtar"
              className="userImage  "
            />
          </div>
        </div>
        <div>
          <p className="text-xl font-semibold">{selectedUser?.fullname} </p>
        </div>
      </div>
      {/* chat container */}
      <div className="flex-1 overflow-y-auto ">
        <Messages />
      </div>
      {/* message send */}
      <SendInput />
    </div>
  );
}

export default MessageContainer;
