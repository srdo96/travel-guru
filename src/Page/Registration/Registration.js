import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [myError, setmyError] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user, loading, error] = useAuthState(auth);

  const handleSignUpWithEmail = (event) => {
    console.log(event);
    event.preventDefault();
    if (password !== confirmPassword) {
      setmyError("Confirm password does not match");
      return;
    }
    console.log(email, password);
    createUserWithEmailAndPassword(email, password).then((result) => {
      // const user = result.user;
      console.log(result);
      console.log("Error: ", error);
    });
    // setError("");
    console.log("click");
  };
  return (
    <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
      <div className="relative sm:max-w-sm w-full">
        <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
          <label
            // for=""
            className="block mt-2 text-2xl text-gray-700 text-center font-semibold"
          >
            Registration
          </label>
          <form onSubmit={handleSignUpWithEmail} className="mt-5">
            <div>
              <input
                onBlur={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Name"
                name="name"
                required
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <input
                onBlur={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                placeholder="Email"
                name="email"
                required
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <input
                onBlur={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                placeholder="Password"
                required
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <p>{error}</p>
              <input
                onBlur={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                type="password"
                placeholder="Confirm password"
                required
                className="pl-3 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
              />
            </div>

            <div className="mt-7">
              <button
                type="submit"
                className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
              >
                Registration
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
                <label className="mr-2">Already have an account?</label>
                <Link
                  to="/login"
                  className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                >
                  Login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registration;
