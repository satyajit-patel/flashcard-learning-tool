import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Hero from './components/Hero';
import Flashcard from './components/Flashcard';
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSignin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      {isAuthenticated && <Navbar onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Navigate to="/Signup" />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<Signin onSignin={handleSignin} />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Flashcard" element={<Flashcard />} />
      </Routes>
    </Router>
  );
}

export default App;
