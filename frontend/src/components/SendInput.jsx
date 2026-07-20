import React, {  useState } from "react";
import { IoMdSend } from "react-icons/io";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "../redux/messageSlice";

function SendInput() {
  
  const [message, setInputMessage] = useState("");
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((store) => store.user);
  const { messages } = useSelector((store) => store.message);
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/message/send/${selectedUser?._id}`,
        { message },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      console.log(res);
      dispatch(setMessages([...messages, res?.data?.newMessage]));
    } catch (error) {
      console.log(error);
    }
    setInputMessage("")
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="max-w-full bg-gray-600 rounded-md flex justify-between mb-5 mr-1 border  "
    >
      <input
          autoFocus
        value={message}
        onChange={(e) => setInputMessage(e.target.value)}
        type="text"
        placeholder="Send a message..."
        className="flex-1 border-none outline-none pl-2 py-1.5 text-white"
      />
      <button type="submit" className=" cursor-pointer ">
        <IoMdSend className="size-5 mr-2 " />
      </button>
    </form>
  );
}

export default SendInput;
