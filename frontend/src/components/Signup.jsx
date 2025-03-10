import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = import.meta.env.VITE_URL_GLOBAL;

export default function SignUpFour() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${URL}/api/v1/user/signup`, { name, email, password })
      .then(() => navigate("/Signin"))
      .catch((err) => {
        console.error("Signup error:", err);
        alert("User already exists");
      });
  };

  const handleSignin = () => {
    navigate("/Signin");
  };

  return (
    <section className="rounded-md bg-black/80 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">
            Sign up to create an account
          </h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account?{" "}
            <button
              onClick={handleSignin}
              className="ml-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 transition duration-300 ease-in-out"
            >
              LOG-IN
            </button>
          </p>
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="text-base font-medium text-gray-900">
                Full Name
              </label>
              <input
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                type="text"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="text-base font-medium text-gray-900">
                Email address
              </label>
              <input
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="text-base font-medium text-gray-900">
                Password
              </label>
              <input
                className="mt-2 w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-black px-3.5 py-2.5 font-semibold text-white hover:bg-black/80"
            >
              Create Account <ArrowRight className="ml-2 inline" size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
