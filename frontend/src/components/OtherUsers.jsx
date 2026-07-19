import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers.jsx";
import { useSelector } from "react-redux";

function OtherUsers() {
  // call custom hooks
  useGetOtherUsers();
  const { OtherUsers } = useSelector((store) => store.user);
  if (!OtherUsers) return;
  return (
    <div className="overflow-auto">
      {OtherUsers?.map((users) => {
        return (
        <OtherUser key={users._id} users={users} />
      );
      })}
    </div>
  );
}

export default OtherUsers;
