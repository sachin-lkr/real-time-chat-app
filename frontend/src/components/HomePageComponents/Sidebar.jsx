import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOtherUsers,setAuthUser } from "../../redux/userSlice";


function Sidebar() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { OtherUsers: otherUsers ,authUser} = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/user/logout`,
          { withCredentials: true }
      );
      dispatch(setAuthUser(null));
      dispatch(setOtherUsers([]));
      toast.success(res.data.message || "Logged out successfully");
         navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };
   // Search users
 const searchSubmitHandler = (e) => {
  e.preventDefault();

  const searchText = search.trim().toLowerCase();

  // if search input blank then show all users
  if (!searchText) {
    setFilteredUsers(otherUsers || []);
    return;
  }

  
  const filtered = otherUsers?.filter((user) =>
    user.fullname?.toLowerCase().includes(searchText)
  );
     if (filtered?.length > 0) {
      setFilteredUsers(filtered);
    } else {
      setFilteredUsers([]);
      toast.error("User does not exist");
    }
};
 // Update users when Redux data changes
useEffect(() => {
  setFilteredUsers(otherUsers || []);
}, [otherUsers,search]);
  return (
    <div className="w-80 bg-slate-900 border-r border-slate-800 flex flex-col justify-between hidden md:flex h-full">
      
      {/* Top Header & Search Bar */}
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            ChatApp
          </h1>
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" title="Online"></span>
        </div>

        <form onSubmit={searchSubmitHandler} className="relative flex items-center">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search users..."
            className="w-full bg-slate-800/60 border border-slate-700/60 rounded-xl pl-3.5 pr-10 py-2 text-sm focus:outline-none focus:border-cyan-500 transition text-slate-100 placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="absolute right-2 p-1.5 text-slate-400 hover:text-cyan-400 transition"
          >
            <FaSearch className="text-xs" />
          </button>
        </form>
      </div>

      {/* Middle: User List Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
        <OtherUsers users={filteredUsers} />
      </div>

      {/* Bottom Profile & Logout Footer */}
      <div className="p-4 bg-slate-950/40 border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <img
              src={authUser?.profileimage || "https://avatar.iran.liara.run/public"}
              alt="profile"
              className="w-9 h-9 rounded-full object-cover border border-cyan-500/40"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border border-slate-900 rounded-full"></span>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold truncate text-white">
              {authUser?.fullname || authUser?.username || "Me"}
            </p>
            <p className="text-[11px] text-emerald-400">Online</p>
          </div>
        </div>

        <button
          onClick={logoutHandler}
          className="text-slate-400 hover:text-red-400 p-2 rounded-lg hover:bg-slate-800/80 transition cursor-pointer"
          title="Logout"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
        </button>
      </div>

    </div>
  );
  
}

export default Sidebar;





