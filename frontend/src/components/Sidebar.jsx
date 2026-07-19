import React from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };
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
      <OtherUsers />
      <div className=" mt-2">
        <button
          onClick={logoutHandler}
          className="btn btn-soft  px-2 py-0.5 cursor-pointer rounded-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
