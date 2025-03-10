import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For responsive mobile menu icon

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-cobalt shadow-lg py-4">
      <div className="flex justify-between items-center px-6 md:px-10">
        {/* Logo / Home Button */}
        <button
          onClick={() => navigate("/Flashcard")}
          className="relative px-6 py-2 text-white font-semibold text-lg transition duration-300 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg hover:opacity-90"
        >
          Flashcard
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="text-white w-7 h-7" /> : <Menu className="text-white w-7 h-7" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <button
            onClick={() => navigate("/AdminDashboard")}
            className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Create
          </button>
          <button
            onClick={() => navigate("/SeeAllCards")}
            className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Read
          </button>
          <button
            onClick={() => navigate("/AdminDashboardUpdate")}
            className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/AdminDashboardDelete")}
            className="px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Delete
          </button>
        </div>

        {/* Desktop Logout Button */}
        <button
          onClick={() => navigate("/Signin")}
          className="hidden md:block px-6 py-2 text-white font-bold rounded-full transition duration-300 bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90"
        >
          Logout
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 mt-4 pb-4 bg-cobalt">
          <button
            onClick={() => navigate("/AdminDashboard")}
            className="w-full text-center px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Create
          </button>
          <button
            onClick={() => navigate("/SeeAllCards")}
            className="w-full text-center px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Read
          </button>
          <button
            onClick={() => navigate("/AdminDashboardUpdate")}
            className="w-full text-center px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Update
          </button>
          <button
            onClick={() => navigate("/AdminDashboardDelete")}
            className="w-full text-center px-6 py-2 bg-black text-white rounded-lg font-bold hover:bg-gray-800 transition duration-300"
          >
            Delete
          </button>
          <button
            onClick={() => navigate("/Signin")}
            className="w-full text-center px-6 py-2 text-white font-bold rounded-full transition duration-300 bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
