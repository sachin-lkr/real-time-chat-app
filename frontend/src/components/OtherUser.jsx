import React from "react";

function OtherUser() {
  return (
    <div>
      <div className="flex  items-center gap-5 text-white hover:text-black hover:bg-zinc-200 rounded-sm p-2 cursor-pointer">
        <div className="avatar avatar-online  ">
          <div className="w-10 rounded-full">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM1qmyAQWiULIEIIE2lRszNSKrbLUkVpYk2CVGVYfdfA&s=10"
              alt="avtar"
              className=""
            />
          </div>
        </div>
        <div>
            <p>sachin kumar bind </p>
        </div>
      </div>
      <div className="divider my-0 py-0"></div>
    </div>
  );
}

export default OtherUser;
