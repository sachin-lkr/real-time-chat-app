import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" flex items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 p-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <h1 className="text-3xl font-bold text-center text-white mb-6">
          Log-In
        </h1>

        <form>
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
              />
            </div>

           

            <button className="btn btn-primary w-full mt-2">Log In</button>

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
