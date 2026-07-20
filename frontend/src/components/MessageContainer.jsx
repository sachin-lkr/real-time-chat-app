import React, { useEffect } from "react";

import SendInput from "./SendInput";
import Messages from "./Messages";
import { useDispatch, useSelector } from "react-redux";
import store from "../redux/store";
import { setSelectedUser } from "../redux/userSlice";

function MessageContainer() {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);
  return (
    <>
      {selectedUser != null ? (
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
      ) : (
        <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-slate-900 via-zinc-900 to-slate-800">
          <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-3xl p-10 text-center shadow-2xl">
            <div className="text-7xl mb-5">💬</div>

            <h1 className="text-4xl font-bold text-white">Welcome</h1>

            <p className="text-gray-300 mt-3 max-w-sm">
              Select a user from the sidebar and start your conversation
              instantly.
            </p>

            <button className="mt-6 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition text-white font-semibold">
              Start Chatting
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MessageContainer;
