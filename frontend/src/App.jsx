import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import './styles.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Hero from './components/Hero';
import Flashcard from './components/Flashcard';
import Navbar from './components/Navbar';
import { fetchFlashcards } from './apis/Api';
import AdminDashboard from './components/AdminDashboard';
import AdminDashboardDelete from './components/AdminDashboardDelete';
import AdminDashboardUpdate from './components/AdminDashboardUpdate';

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
    <div>
      {location.pathname !== "/Signup" && location.pathname !== "/Signin" && <Navbar />}
      <Routes>
        <Route path="/" element={<Navigate to="/Signup" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Flashcard" element={<Flashcard arr={flashcards} />} />
        <Route path="/AdminDashboard" element={<AdminDashboard setFlashcards={setFlashcards} />} />
        <Route path="/AdminDashboardDelete" element={<AdminDashboardDelete flashcards={flashcards} setFlashcards={setFlashcards} />} />
        <Route path="/AdminDashboardUpdate" element={<AdminDashboardUpdate flashcards={flashcards} setFlashcards={setFlashcards} />} />
      </Routes>
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
