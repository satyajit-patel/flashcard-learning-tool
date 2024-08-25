import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";

import Signup from './components/Signup';
import Signin from './components/Signin';
import Hero from './components/Hero';
import Flashcard from './components/Flashcard';
import Navbar from './components/Navbar';
import {fetchFlashcards} from './apis/Api';
import AdminDashboard from './components/AdminDashboard';
import './styles.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleSignin = () => {
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const [flashcards, setFlashcards] = useState([]);
  useEffect(() => {
      async function getFlashcards() {
          const data = await fetchFlashcards();
          setFlashcards(data);
      }
      getFlashcards();
  }, []);

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Navigate to="/Signup" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin onSignin={handleSignin} />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Flashcard" element={<Flashcard arr={flashcards} />} />
        <Route path='/AdminDashboard' element={<AdminDashboard setFlashcards={setFlashcards} />} />
      </Routes>
    </Router>
  );
}

export default App;
