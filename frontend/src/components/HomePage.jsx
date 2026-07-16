import React from "react";
import Sidebar from "./Sidebar";
import MessageContainer from "./MessageContainer";

const HomePage = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 ">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default HomePage;
