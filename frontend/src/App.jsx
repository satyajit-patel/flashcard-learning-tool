import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Signin from './components/Signin';
import Hero from './components/Hero';
import Flashcard from './components/Flashcard';

function App() {
  // Router - wrapper of Route and Link
  // Routes - wrapper of multiple Route
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/Hero" />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Flashcard" element={<Flashcard />} />
      </Routes>
    </Router>
  );
}

export default App;
