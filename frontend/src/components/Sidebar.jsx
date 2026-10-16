import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setOtherUsers } from "../redux/userSlice";


function Sidebar() {
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const { OtherUsers: otherUsers } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}api/v1/user/logout`);
      navigate("/login");
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

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

useEffect(() => {
  setFilteredUsers(otherUsers || []);
}, [search]);
  return (
    <div className="border=r border-slate-500 p-4 flex flex-col w-[320px]  ">
      <form
        onSubmit={searchSubmitHandler}
        action="#"
        className="flex items-center gap-1.5"
      >
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search...."
          className="input input-bordered rounded-md "
        />
        <button type="submit" className=" btn btn-circle bg-zinc-500 b ">
          <FaSearch className="24px" />
        </button>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers users={filteredUsers} />
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
