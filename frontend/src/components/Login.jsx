import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlice";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const naviGate = useNavigate();
  const dispatch =useDispatch();
  const onSubmitHeandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `http://localhost:5000/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        },
      );
      console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);
        naviGate("/");
        console.log(res.data)
        dispatch(setAuthUser(res.data));
      }

    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <div className=" flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Log-In
        </h1>

        <form onSubmit={onSubmitHeandler}>
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className="text-white font-medium">
                Username
              </label>

              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter Username"
                className="input input-bordered w-full mt-2"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
              />
            </div>

            <div>
              <label htmlFor="password" className="text-white font-medium">
                Password
              </label>

              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Password"
                className="input input-bordered w-full mt-2"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>

            <button className="btn btn-primary w-full mt-2" type="submit">
              Log In
            </button>

            <p className="text-center text-gray-300">
              Create an account?
              <Link
                to="/signup"
                className="text-cyan-400 cursor-pointer hover:underline ml-1"
              >
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
