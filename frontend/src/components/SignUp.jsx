import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios"

const SignUp = () => {
  const [user, setUser] = useState({
    fullname: "",
    username: "",
    password: "",
    confirmpassword: "",
    gender: "",
  });

  const naviGate=useNavigate();

  const onSubmitHeandler =async (e) => {
    e.preventDefault();
    try {
      const res= await axios.post(`http://localhost:5000/api/v1/user/register`,user,{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      });
      console.log(res);
        
     if(res.data.success){
      toast.success(res.data.message);
      naviGate("/login");

     }
      
    } catch (error) {
      
      console.log(error);
      
    }
    setUser({
      fullname: "",
      username: "",
      password: "",
      confirmpassword: "",
      gender: "",
    });
  };

  const handelCheckBox = (gender) => {
    setUser({ ...user, gender });
  };

  return (
    <div className="rounded-2xl flex items-center justify-center  from-slate-900 via-indigo-900 to-slate-800 p-2">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Create Account
        </h1>

        <form onSubmit={onSubmitHeandler}>
          <div className="space-y-4">
            <div>
              <label htmlFor="fullname" className="text-white font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter Full Name"
                className="input input-bordered w-full mt-2"
                value={user.fullname}
                onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              />
            </div>

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

            <div>
              <label
                htmlFor="confirmPassword"
                className="text-white font-medium"
              >
                Confirm Password
              </label>

              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="input input-bordered w-full mt-2"
                value={user.confirmpassword}
                onChange={(e) =>
                  setUser({ ...user, confirmpassword: e.target.value })
                }
              />
            </div>
            <div className="flex gap-5 text-white">
              <div className="flex gap-2">
                <p>Male</p>
                <input
                  type="checkbox"
                  className="checkbox border-amber-50 rounded-2xl"
                  value={user.gender}
                  checked={user.gender === "male"}
                  onChange={() => handelCheckBox("male")}
                />
              </div>
              <div className="flex gap-2">
                <p>Female</p>
                <input
                  type="checkbox"
                  className="checkbox border-amber-50 rounded-2xl"
                  value={user.gender}
                  checked={user.gender === "female"}
                  onChange={() => handelCheckBox("female")}
                />
              </div>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Sign Up
            </button>

            <p className="text-center text-gray-300">
              Already have an account?
              <Link
                to="/login"
                className="text-cyan-400 cursor-pointer hover:underline ml-1"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
