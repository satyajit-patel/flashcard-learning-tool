import React from "react";
import { FlipWords } from "./flip-words";
import { useState } from "react";
import axios from 'axios';


export function FlipWordsDemo({ setFlashcards }) {
  const words = ["Create", "Generate", "Build", "Develop", "Forge", "Craft"];
  const createFlashcard = async (flashcard) => {
      const response = await axios.post(`${import.meta.env.VITE_URL_GLOBAL}/todo/todos`, flashcard);
      return response.data;
  };
  const [quote, setQuestion] = useState('');
  const [poet, setAnswer] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      const newFlashcard = await createFlashcard({ quote, poet });
      console.log(newFlashcard.data);
      if(newFlashcard.quote == quote) {
          alert("data created");
      }
      setFlashcards(prevFlashcards => [...prevFlashcards, newFlashcard]);
      setQuestion('');
      setAnswer('');
  };


  return (
    (
            <div className="bg-gold m-2 p-2 text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
                Please
                <FlipWords words={words} /> <br />
                something..

                <div className="admin-dashboard bg-moonGlow">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={quote}
                        onChange={(e) => setQuestion(e.target.value)}
                        placeholder="Question"
                        required
                        className="bg-moonGlow text-slate-400 h-8 placeholder:text-xl m-1 p-1 text-xl"
                    />
                    <input
                        type="text"
                        value={poet}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Answer"
                        required
                        className="bg-moonGlow  h-8 placeholder:text-xl m-1 p-1 text-xl"
                    />
                    <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">
                        Add Flashcard
                        </span>
                    </button>
                </form>
            </div>

            </div>
    )
  );
}
