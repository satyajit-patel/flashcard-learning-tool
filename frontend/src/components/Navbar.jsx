import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Flash-Card</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li><a onClick={handleHome}>Home</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li> <a href="https://en.wikipedia.org/wiki/Flashcard" target="_blank" rel="wikipedia">wiki</a></li>
                <li><a>admin</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
        
  )
}

export default Navbar
