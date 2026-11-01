import React, { useEffect } from "react";

import SendInput from "../HomePageComponents/SendInput.jsx";
import Messages from "../HomePageComponents/Messages.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../../redux/userSlice.js";

function MessageContainer() {
  const { selectedUser } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    return () => dispatch(setSelectedUser(null));
  }, []);
  return (
     <main className="flex-1 flex flex-col bg-slate-950 h-full overflow-hidden">
      {selectedUser != null ? (
        <>
          {/* Active Chat Header */}
          <div className="h-16 px-6 bg-slate-900/80 backdrop-blur border-b border-slate-800 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={selectedUser?.profileimage}
                  alt={selectedUser?.fullname}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/30"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-slate-900 rounded-full"></span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {selectedUser?.fullname}
                </h3>
                <p className="text-xs text-emerald-400">Active Now</p>
              </div>
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 overflow-y-auto bg-slate-950">
            <Messages />
          </div>

          {/* Message Input Footer */}
          <div className="p-4 bg-slate-900 border-t border-slate-800 shrink-0">
            <SendInput />
          </div>
        </>
      ) : (
        /* Empty State Screen */
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 text-3xl shadow-lg shadow-cyan-500/10">
            💬
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Welcome to ChatApp</h2>
          <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
            Select a contact from the left sidebar to start a real-time conversation.
          </p>
        </div>
      )}
    </main>
  );
}

export default MessageContainer;
