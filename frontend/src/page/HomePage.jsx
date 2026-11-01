import React from "react";
import Sidebar from "../components/HomePageComponents/Sidebar";
import MessageContainer from "../components/HomePageComponents/MessageContainer";

const HomePage = () => {
  return (
      <div className="flex h-screen w-full overflow-hidden bg-slate-950 text-slate-100 font-sans">
        <Sidebar />
        <MessageContainer />
      </div>
  );
};

export default HomePage;
