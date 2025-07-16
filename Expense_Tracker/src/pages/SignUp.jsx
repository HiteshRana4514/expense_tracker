import React from "react";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePassword = (value) => {
    setPassword(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!email || !name || !password) {
      alert("Please fill in all fields!");
      return;
    }
    const passwordLength = password.length;
    if (passwordLength < 8) {
      alert("Password must be at least 8 characters long!");
      return;
    }
    const strongPasswordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!strongPasswordRegex.test(password)) {
      alert(
        "Password must contain at least one uppercase letter, one lowercase letter, and one number!"
      );
      return;
    }
    console.log("Form submitted successfully!");
  };

  return (
    <>
      <div className="flex justify-center items-center bg-amber-400 w-full h-screen px-[20px]">
        <div className="p-4 bg-white max-w-[600px] w-full rounded-xl">
          <h1 className="text-2xl text-black text-center font-bold mb-4">
            SIGN UP
          </h1>
          <form action="" onSubmit={(e) => handleSubmit(e)} className="mb-8">
            <div className="mb-8">
              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your name"
                  required
                  onInput={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Enter your email"
                  required
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
                    className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 pr-[55px]"
                    placeholder="Enter your password"
                    required
                    onInput={(e) => handlePassword(e.target.value)}
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
              <div className="mb-2">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                  Confirm Password
                </label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                  placeholder="Confirm your password"
                  required
                  onInput={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="cursor-pointer p-3 w-full bg-amber-200 rounded-xl text-xl hover:bg-amber-300 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
          <span className="text-sm block text-center">
            Already registered?{" "}
            <Link
              to="/"
              className="text-amber-400 hover:text-amber-500 transition duration-300"
            >
              Sign in here
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default SignUp;
