import React from "react";

function Messages() {
  return (
    <div className="p-4 overflow-y-auto">
      {/* Single Message */}
      <div className="chat chat-start">
        <div className="chat-image avatar avatar-online">
          <div className="w-10 rounded-full">
            <img
              src="https://i.pravatar.cc/150?img=12"
              alt="User"
            />
          </div>
        </div>

        <div className="chat-header text-white mb-1">
          Rahul
          <time className="text-xs opacity-50 ml-2">10:45 AM</time>
        </div>

        <div className="chat-bubble bg-indigo-600 text-white">
          Hello Sachin 👋
        </div>
      </div>

      {/* My Message */}
      <div className="chat chat-end mt-4">
        <div className="chat-bubble bg-green-600 text-white">
          Hi Rahul, Kaise ho?
        </div>

        <div className="chat-footer opacity-50 text-xs mt-1 text-white">
          Seen
        </div>
      </div>
    </div>
  );
}

export default Messages;