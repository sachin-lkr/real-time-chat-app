import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";


function OtherUser({ users }) {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const selectedUserHandler = (users) => {
    dispatch(setSelectedUser(users));
  };
  return (
    <>
      <div
        onClick={() => selectedUserHandler(users)}
        className={`${selectedUser?._id === users?._id ? "bg-zinc-200  " : "text-white" } flex  items-center gap-5   hover:text-black hover:bg-zinc-200 rounded-sm p-2 cursor-pointer`}
      >
        <div className="avatar avatar-online  ">
          <div className="w-10 rounded-full">
            <img src={users?.profileimage} alt="avtar" className="" />
          </div>
        </div>
        <div>
          <p>{users?.fullname} </p>
        </div>
      </div>
      <div className="divider my-0 py-0"></div>
    </>
  );
}

export default OtherUser;
