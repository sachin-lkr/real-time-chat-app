import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPass: "",
    gender: "",
  });

  const onSubmitHeandler = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      fullName: "",
      userName: "",
      password: "",
      confirmPass: "",
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
                value={user.fullName}
                onChange={(e) => setUser({ ...user, fullName: e.target.value })}
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
                value={user.userName}
                onChange={(e) => setUser({ ...user, userName: e.target.value })}
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
                value={user.confirmPass}
                onChange={(e) =>
                  setUser({ ...user, confirmPass: e.target.value })
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
