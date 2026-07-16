import React from "react";

import SendInput from "./SendInput";
import Messages from "./Messages";

function MessageContainer() {
  return (
    <div className="min-w-[450px] flex flex-col justify-between">
      
        <div className="flex  items-center gap-5 text-white bg-zinc-800   p-2 cursor-pointer px-4 py-2 mb-2">
          <div className="avatar avatar-online  ">
            <div className="w-10 rounded-full">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1qmyAQWiULIEIIE2lRszNSKrbLUkVpYk2CVGVYfdfA&s=10"
                alt="avtar"
                className="userImage"
              />
            </div>
          </div>
          <div>
            <p className="text-xl font-semibold">Sachin kumar bind </p>
          </div>
        
      </div>
       {/* chat container */}
      <div className="flex-1">
        <Messages/>
      </div>
      {/* message send */}
      <SendInput/>
    </div>
  );
}

export default MessageContainer;
