import React from 'react'
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  
  const handleGetStarted = () => {
    navigate('/Flashcard');
  };

  return (

    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://www.cambridge.org/elt/blog/wp-content/uploads/2019/08/Different-Types-of-flash-card.png)",
      }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Flash-Card</h1>
          <p className="mb-5">
          A flashcard or flash card is a card bearing information on both sides, which is intended to be used as an aid in memorization. Each flashcard typically bears a question or definition on one side and an answer or target term on the other. Flashcards are often used to memorize vocabulary, historical dates, formulae or any subject matter that can be learned via a question-and-answer format. Flashcards can be virtual (part of a flashcard software), or physical.
          </p>
          <button className="btn btn-primary" onClick={handleGetStarted}>Get Started</button>
        </div>
      </div>
    </div>

  )
}

export default Hero
