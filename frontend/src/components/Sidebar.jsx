import React from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";

function Sidebar() {
  return (
    <div className="border=r border-slate-500 p-4 flex flex-col w-[320px]  ">
      <form action="#" className="flex items-center gap-1.5">
        <input
          type="text"
          placeholder="Search...."
          className="input input-bordered rounded-md "
        />
        <button type="submit" className=" btn btn-circle bg-zinc-500 b ">
          <FaSearch className="24px" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers/>
       <div className=" mt-2">
        <button className="btn btn-soft  px-2 py-1 cursor-pointer rounded-sm">Logout</button>
       </div>
    </div>
  );
}

export default Sidebar;
