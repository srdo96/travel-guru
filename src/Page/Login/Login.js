import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // const handleLogIn=()={

  // }
  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label className="block mt-2 text-2xl text-gray-700 text-center font-semibold">
            Login
          </label>
          <form className="mt-5">
            <div className="mt-7">
              <input
                type="email"
                placeholder="Email"
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <input
                type="password"
                placeholder="Password"
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Login
              </button>
            </div>

            <div className="flex mt-7 items-center text-center">
              <hr className="border-gray-300 border-1 w-full rounded-md" />
              <label className="block font-medium text-sm text-gray-600 w-full">
                or
              </label>
              <hr className="border-gray-300 border-1 w-full rounded-md" />
            </div>

            <div className="flex mt-7 justify-center w-full">
              <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Facebook
              </button>

              <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                Google
              </button>
            </div>

            <div className="mt-7">
              <div className="flex justify-center items-center">
                <label className="mr-2">Don't have an account?</label>
                <Link
                  to="/registration"
                  className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Create new.
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
