import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { fetchFlashcards } from "../apis/Api";

const URL = import.meta.env.VITE_URL_GLOBAL;

export default function SignUpFour() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function wakeUpCall() {
      await fetchFlashcards();
    }
    wakeUpCall();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(`${URL}/api/v1/user/signin`, { email, password });
      if (result.data === "success") {
        navigate("/Hero");
      } else {
        alert(result.data);
      }
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section className="rounded-md bg-black/80 p-2">
      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-2xl font-bold leading-tight text-black">Sign In</h2>
          <p className="mt-2 text-base text-gray-600">
            Don't have an account?{" "}
            <button
              className="ml-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-green-500 hover:to-blue-500 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => navigate("/Signup")}
            >
              REGISTER
            </button>
          </p>
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <input
                  className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="email"
                  id="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  Password
                </label>
                <input
                  className="mt-2 flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1"
                  type="password"
                  id="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
              >
                Log In <ArrowRight className="ml-2" size={16} />
              </button>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md bg-gray-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-gray-600"
                onClick={() => navigate("/Hero")}
              >
                Continue as Guest
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
