import React from "react";
import OtherUser from "./OtherUser";
import useGetOtherUsers from "../hooks/useGetOtherUsers.jsx";


function OtherUsers({users}) {
  // call custom hooks
  useGetOtherUsers();

  if (!users) return;
  return (
    <div className="overflow-auto">
      {users?.map((user) => {
        return (
        <OtherUser key={user._id} users={user} />
      );
      })}
    </div>
  );
}

export default OtherUsers;
