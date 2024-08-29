import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './styles.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Flashcard from './components/Flashcard';
import { fetchFlashcards } from './apis/Api';
import AdminDashboardDelete from './components/AdminDashboardDelete';
import AdminDashboardUpdate from './components/AdminDashboardUpdate';
import {FlipWordsDemo} from './components/flipWords/FlipWordsDemo';
import {MeteorsDemo} from './components/meteorEffect/MeteorsDemo';
import Navbar from './components/Navbar';
import SeeAllCards from './components/SeeAllcards';

function AppContent() {
  const location = useLocation();
  const [flashcards, setFlashcards] = useState([]);

  const memo = useCallback(() => {
    const getFlashcards = async () => {
      const data = await fetchFlashcards();
      setFlashcards(data);
    };
    getFlashcards();
  }, [setFlashcards]);

  useEffect(() => {
    memo();
  }, [memo, setFlashcards]);

  return (
    <div className='h-screen w-screen flex flex-wrap justify-center items-center'>
        
      {location.pathname !== "/Signup" && location.pathname !== "/Hero" && location.pathname !== "/Signin" && <Navbar />}
      
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="/Signin" />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Hero" element={<MeteorsDemo />} />
          <Route path="/SeeAllCards" element={<SeeAllCards arr={flashcards} />} />
          <Route path="/Flashcard" element={<Flashcard arr={flashcards} />} />
          <Route path="/AdminDashboard" element={<FlipWordsDemo setFlashcards={setFlashcards} />} />
          <Route path="/AdminDashboardDelete" element={<AdminDashboardDelete flashcards={flashcards} setFlashcards={setFlashcards} />} />
          <Route path="/AdminDashboardUpdate" element={<AdminDashboardUpdate flashcards={flashcards} setFlashcards={setFlashcards} />} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
