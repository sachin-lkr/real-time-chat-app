import React, { useEffect } from "react";
import axios from "axios"
import { useSelector,useDispatch } from "react-redux";
import { setMessage } from "../redux/messageSlice";
import store from "../redux/store";
const useGetMessages = () => {
    const {selectedUser}=useSelector(store=>store.user)
    const dispatch =useDispatch();
  useEffect(() => {
    const fetchMessages = async () => {
        try {
            axios.defaults.withCredentials=true;
            const res = await axios.get(`http://localhost:5000/api/v1/message/${selectedUser?._id}`)
            console.log(res)
            dispatch(setMessage(res.data))
        } catch (error) {
            console.log(error);
        }
    };
    fetchMessages();
  }, [selectedUser]);
};

export default useGetMessages;
