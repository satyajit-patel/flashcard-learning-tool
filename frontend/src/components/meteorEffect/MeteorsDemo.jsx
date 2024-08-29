import React from "react";
import { Meteors } from "./meteors";

import { useNavigate } from 'react-router-dom';

export function MeteorsDemo() {
    
  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/Flashcard');
  };

  return (
    (<div className="bg-moonNight h-screen w-screen flex flex-wrap justify-center items-center m-6 p-6">
      <div className=" w-full relative max-w-xs">
        <div
          className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div
          className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <div
            className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </div>

          {/* 
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">
            Share and Learn through Flashcards.
          </h1> */}

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            A flashcard or flash card is a card bearing information on both sides, 
            which is intended to be used as an aid in memorization. 
            Each flashcard typically bears a question or definition on one side and an answer or 
            target term on the other. Flashcards are often used to memorize vocabulary, historical dates, 
            formulae or any subject matter that can be learned via a question-and-answer format. 
            Flashcards can be virtual (part of a flashcard software), or physical.
          </p>

          <button onClick={handleGetStarted} className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
            Explore
          </button>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>)
  );
}
