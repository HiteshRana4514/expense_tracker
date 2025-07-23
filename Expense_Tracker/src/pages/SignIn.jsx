import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {account, ID } from '../lib/appwrite';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [logedinUser, setLogedinUser] = useState(null);
  const navigate = useNavigate();
  const { login,user } = useAuth();


  const handleSubmit = ()=>{
    if(!email || !password){
      alert("Please fill all fields");
      return;
    }
    login(email,password);
    if(user){
          navigate('/dashboard');
          setLogedinUser(user);
    }
  }

  return (
    <>
    <div className="flex justify-center items-center bg-amber-400 w-full h-screen px-[20px]">
      <div className="p-4 bg-white max-w-[600px] w-full rounded-xl">
        <h1 className="text-2xl text-black text-center font-bold mb-4">
          SIGN IN
        </h1>
        <form action="" className="mb-8">
          <div className="mb-8">
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                placeholder="Enter your email"
                onInput={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 pr-[55px]"
                  placeholder="Enter your password"
                  onInput={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute top-0 bottom-0 right-0 w-[50px] flex justify-center items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-gray-500 hover:text-gray-700 transition duration-300" />
                  ) : (
                    <Eye className="text-gray-500 hover:text-gray-700 transition duration-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="cursor-pointer p-3 w-full bg-amber-200 rounded-xl text-xl hover:bg-amber-300 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
        <span className="text-sm block text-center">No account yet? <Link to='/signup' className="text-amber-400 hover:text-amber-500 transition duration-300">Sign up now</Link></span>
      </div>
      </div>
    </>
  );
}

export default SignIn;
